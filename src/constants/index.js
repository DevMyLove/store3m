const dotenv = require("dotenv");
dotenv.config();

const DB = process.env.APP_DB;
const DOMAIN = process.env.APP_DOMAIN;
const SECRET = process.env.APP_SECRET;
const PORT = process.env.PORT || process.env.APP_PORT;
const MAIL_USERNAME = process.env.MAIL_USERNAME;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

module.exports = {
    DB,
    DOMAIN,
    SECRET,
    PORT,
    MAIL_USERNAME,
    MAIL_PASSWORD,
}