const controller = require("../controller/signup.controller");
const signUpRoute = require("express").Router();

signUpRoute.post("/checkemail", controller.checkDuplicateEmail);

signUpRoute.post("/register", controller.registerUser);

signUpRoute.post("/upload", controller.upload);

signUpRoute.post("/verify-token", controller.verifyOtherServices);

module.exports = signUpRoute;
