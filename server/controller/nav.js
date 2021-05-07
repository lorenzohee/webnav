const Joi = require('joi')
const Nav = require('../models/nav')
const NavCategory = require('../models/navCategory')

const navSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
  link: Joi.string().required(),
  category: Joi.string().required(),
})

async function insert (nav) {
  const value = await navSchema.validateAsync(nav, {abortEarly: false})
  const navCategory = await new NavCategory({title: nav.category}).save()
  value.category = navCategory._id
  return await new Nav(value).save()
}

async function list () {
  return await Nav.find().populate('category').exec()
}

module.exports = { list, insert }
