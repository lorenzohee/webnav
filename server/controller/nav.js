const Joi = require('joi')
const Nav = require('../models/nav')
const NavCategory = require('../models/navCategory')

const navSchema = Joi.object({
  _id: Joi.any(),
  title: Joi.string().required(),
  icon: Joi.string().required(),
  link: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
})

async function formatNav() {
  return await NavCategory.aggregate([{
    $lookup: {
      from: 'navs',
      localField: '_id',
      foreignField: 'category',
      as: 'children'
    }
  }]).sort({order: 1})
}

async function insert (nav) {
  const value = await navSchema.validateAsync(nav, {abortEarly: false})
  const categories = await NavCategory.find({'title': nav.category})
  let navCategory = {}
  if(categories.length > 0) {
    navCategory = categories[0]
  } else {
    navCategory = await new NavCategory({title: nav.category}).save()
  }
  value.category = navCategory._id
  return await new Nav(value).save()
}

async function list (obj) {
  const navResult = await Nav.find().populate('category')
  return {data: navResult, ...obj, total: '300'}
}

async function update (nav) {
  delete nav.createdAt
  const value = await navSchema.validateAsync(nav, {abortEarly: false})
  const categories = await NavCategory.find({'title': nav.category})
  let navCategory = {}
  if(categories.length > 0) {
    navCategory = categories[0]
  } else {
    navCategory = await new NavCategory({title: nav.category}).save()
  }
  let navTmp = await Nav.findById(nav._id)
  Object.assign(navTmp, value)
  navTmp.category = navCategory._id
  return await navTmp.save()
}

async function deleteNav(_id) {
  return await Nav.findByIdAndDelete(_id)
}

module.exports = { list, insert, update, deleteNav, formatNav }
