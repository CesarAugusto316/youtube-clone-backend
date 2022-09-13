import { Router } from 'express';
import { controllerUSer } from '../controllers/index.js';


export const routerUser = Router();

routerUser.route('/').get(controllerUSer);
