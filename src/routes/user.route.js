const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const userController = require('../app/controllers/user.controller');
const SiteController = require('../app/controllers/site.controller');
const { RegisterValidations } = require('../validators/user-validator');
const Validator = require('../middlewares/validator-middleware');

router.get('/login', userController.login_get);
// router.post('/login', userController);
// router.get('/signup', userController);
// router.post('/signup', userController);
router.get('/register', userController.register_get);
router.post('/register',RegisterValidations,Validator, userController.register_post);
router.get('/verify-now/:verificationCode', userController.verify);
router.get('/notFound', SiteController.page404);
router.get('/', SiteController.home);
router.get('/*', SiteController.page404);

module.exports = router;