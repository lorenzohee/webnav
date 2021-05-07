const express = require('express');
const navRouter = require('./nav.route')
const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);
router.use('*', (req, res, next) => {
  next();
})

router.use('/nav', navRouter)

module.exports = router;
