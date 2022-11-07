const { Router } = require('express');
const { controllerUSer } = require('../controllers/controllerUser.js');
const { validateToken } = require('../middlewares/validateToken');


const routerUser = Router();

routerUser.route('/')
  .get(controllerUSer.getAll);

routerUser.route('/:id')
  .patch(validateToken, controllerUSer.update)
  .delete(validateToken, controllerUSer.remove);
// .get(validateToken, controllerUSer.getById)

// routerUser.route('/sub/:channelId')
//   .patch(controllerUSer.subscribe);

// routerUser.route('/unsub/:channelId')
//   .patch(controllerUSer.unSubscribe);

// routerUser.route('/like/:videoId')
//   .patch(controllerUSer.like);

// routerUser.route('/dislike/:videoId')
//   .patch(controllerUSer.disLike);


module.exports = { routerUser };
