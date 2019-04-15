const router = require('express').Router();
const api = require('../controller/Api');

router.get('/test', api.test);

module.exports = router;
