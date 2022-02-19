const nodemailer = require("nodemailer");
const hbsMailer = require("nodemailer-express-handlebars");
const path = require("path");
const { DOMAIN, MAIL_USERNAME, MAIL_PASSWORD } = require("../constants/index");

const sendEmail = async (req, res, next, verificationCode) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: MAIL_USERNAME, // generated ethereal user
        pass: MAIL_PASSWORD, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const handlebarOption = {
      viewEngine: {
        extName: ".hbs",
        partialsDir: path.resolve("src/recources/views/sendMail"),
        defaultLayout: false,
      },
      viewPath: path.resolve("src/recources/views/sendMail"),
      extName: ".hbs",
    };

    transporter.use("compile", hbsMailer(handlebarOption));

    var message = {
      from: MAIL_USERNAME,
      to: req.body.email,
      subject: "Verify your account",
      template: "verifyMail",
      context: {
        email: req.body.email,
        confirmAccount: DOMAIN + '/user/verify-now/' + verificationCode,
      },
    };

    await transporter.sendMail(message, (error, info) => {
      if (error) {
        return false;
      }
      return true;
    });
  } catch (error) {
    return false;
  }
};

module.exports = sendEmail;
