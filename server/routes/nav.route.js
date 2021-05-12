const express = require('express')
const asyncHandler = require('express-async-handler')
const navController = require('../controller/nav')

const router = express.Router();

router.get('/index', asyncHandler(getNavList))
router.post('/', asyncHandler(insert))
router.put('/:id', asyncHandler(update))
router.delete('/:id', asyncHandler(deleteNav))
router.get('/', asyncHandler(formatNav))

async function getNavList(req, res) {
  let nav = await navController.list(req.query);
  res.json(nav)
}

async function insert(req, res) {
  let nav = await navController.insert(req.body);
  res.json(nav)
}

async function update(req, res) {
  let nav = await navController.update(req.body);
  res.json(nav)
}

async function deleteNav(req, res) {
  console.log(req.params.id)
  let nav = await navController.deleteNav(req.params.id)
  res.json(nav)
}

async function formatNav(req, res) {
  let json = await navController.formatNav()
  res.json(json)
}

module.exports = router