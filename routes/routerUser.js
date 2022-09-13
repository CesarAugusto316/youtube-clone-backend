import { Router } from 'express';
import { controllerUSer } from '../controllers/index.js';
import { validateToken } from '../validateToken.js';


export const routerUser = Router();

routerUser.route('/')
  .get(controllerUSer.getAll);

routerUser.route('/:id')
  .get(controllerUSer.getById)
  .patch(validateToken, controllerUSer.update)
  .delete(controllerUSer.remove);

routerUser.route('/sub/:channelId')
  .patch(controllerUSer.subscribe);

routerUser.route('/unsub/:channelId')
  .patch(controllerUSer.unSubscribe);

routerUser.route('/like/:videoId')
  .patch(controllerUSer.like);

routerUser.route('/dislike/:videoId')
  .patch(controllerUSer.disLike);
