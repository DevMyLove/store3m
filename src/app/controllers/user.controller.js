const User = require("../models/users");
const { validationResult } = require("express-validator");
const { RegisterValidations } = require("../../validators/user-validator");
const { json } = require("express/lib/response");
const { randomBytes } = require("crypto");
const sendEmail = require("../../utils/email");
const mongooseObj = require("../../utils/mongooseToObject");

class usersController {
  login_get(req, res) {
    res.render("user/login");
  }

  login_post(req, res) {}

  signup_get(req, res) {}

  signup_post(req, res) {}
  register_get(req, res) {
    res.render("user/register");
  }

  async register_post(req, res, next) {
    try {
      let { email, password } = req.body;
      // Check email is taken or not
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          success: false,
          message: "Email is already taken.",
        });
      }
      user = new User({
        ...req.body,
        verificationCode: randomBytes(20).toString("hex"),
      });
      user.genaratePasswordReset();
      await user.save();
      // Send the email to the user with a verification link
      if (!sendEmail(req, res, next, user.verificationCode)) {
        res.status(500).json(err);
      } else {
        res.render("sendMail/awaitingRegistration");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async verify(req, res, next) {
    try {
      let { verificationCode } = req.params;
      let user = await User.findOne({
          verificationCode: req.params.verificationCode,
          verified: false,
        });
      if (!user) {
        res.json({"err": "your account verified"});
        next();
      }
      else{
        user.verified = true;
        await user.save();
        res.redirect("../login");
      }
    } catch (error) {
      res.json(error);
    }
  }
}
module.exports = new usersController();
