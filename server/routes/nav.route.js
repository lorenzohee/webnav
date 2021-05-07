const express = require('express')
const asyncHandler = require('express-async-handler')
const navController = require('../controller/nav')

const router = express.Router();

router.get('/index', asyncHandler(getNavList))
router.post('/', asyncHandler(insert))

async function getNavList(req, res) {
  let nav = await navController.list();
  res.json(nav)
}

async function insert(req, res) {
  let nav = await navController.insert(req.body);
  res.json(nav)
}

module.exports = router