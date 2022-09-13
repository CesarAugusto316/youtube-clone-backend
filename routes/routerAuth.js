import { Router } from 'express';
import { controllerAuth } from '../controllers/index.js';


export const routerAuth = Router();

routerAuth.route('/signup/').post(controllerAuth.signUp);
routerAuth.route('/signin/').post(controllerAuth.signIn);
