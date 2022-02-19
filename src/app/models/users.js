const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const {hash, compare} = require("bcryptjs");
const {sign} = require("jsonwebtoken");
const {SECRET} = require("../../constants/index");
const {randomBytes} = require("crypto");
const {pick} = require("lodash");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        verified: {
            type: Boolean,
            default: false,
        },
        verificationCode: {
            type: String,
            required: true,
        },
        resetPasswordToken: {
            type: String,
            required: true,
        },
        resetPasswordExpiresIn: {
            type: Date,
            required: true,
        }
    },
    {timestamps: true}
);

UserSchema.pre('save', async function(next) {
    let user = this;
    if(!user.isModified("password")) return next();
    user.password = await hash(user.password,10);
    next();
});

UserSchema.methods.comparePassword = async function(password){
    return await compare(password, this.password);
}

UserSchema.methods.genarateJWT = async function(){
    let payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        id: this._id,
    };
    return await sign(payload,SECRET,{expiresIn:"1 day"});
}

UserSchema.methods.genaratePasswordReset = function() {
    this.resetPasswordExpiresIn = Date.now() + 31557600 ;
    this.resetPasswordToken = randomBytes(20).toString("hex");
}

UserSchema.methods.getUserInfor = function() {
    return pick(this,["_id","firstname","lastname","email",])
}

module.exports = mongoose.model("user",UserSchema);