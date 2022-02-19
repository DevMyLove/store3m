const { check } = require("express-validator");

const firstname = check("firstname", "Firstname is required").not().isEmpty();
const lastname = check("lastname", "Lastname is required").not().isEmpty();
const email = check("email", "Please provide a vaild email address").isEmail();
const password =  check('password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long');
const repeatPassword =  check('repeatPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    // Indicates the success of this synchronous custom validator
    return true;
  });
const RegisterValidations = [firstname, lastname, email, password, repeatPassword];
const AuthenteValidation = [email, password];

module.exports = { RegisterValidations, AuthenteValidation };
