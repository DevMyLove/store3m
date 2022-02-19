const { RegisterValidations } = require('../validators/user-validator');
const { validationResult } = require("express-validator");

const validationMiddleware = (req, res, next) => {
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({
            errors: errors.array(),
        });
    }
    next();
}

module.exports = validationMiddleware;