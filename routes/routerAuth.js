const { Router } = require('express');
const { controllerAuth } = require('../controllers/controllerAuth');
// const { controllerAuth } = require('../controllers/index.js');


const routerAuth = Router();

routerAuth.route('/signup/').post(controllerAuth.signUp);
routerAuth.route('/login/').post(controllerAuth.signIn);

module.exports = { routerAuth };
