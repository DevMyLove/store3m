const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const SiteController = require('../app/controllers/siteController')

router.get('/notFound', SiteController.page404);
router.get('/', SiteController.home);
router.get('/*', SiteController.page404);

module.exports = router;