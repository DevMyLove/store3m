const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const userController = require('../app/controllers/auth.controller');
const SiteController = require('../app/controllers/site.controller');

// router.get('/login', userController);
// router.post('/login', userController);
// router.get('/signup', userController);
// router.post('/signup', userController);
router.get('/notFound', SiteController.page404);
router.get('/', SiteController.home);
router.get('/*', SiteController.page404);

module.exports = router;