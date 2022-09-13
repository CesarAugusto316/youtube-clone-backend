const { Router } = require('express');
// const { controllerUSer } = require('../controllers/index.js');
const { controllerUSer } = require('../controllers/controllerUser.js');
// const { validateToken } = require('../validateToken.js');


const routerUser = Router();

routerUser.route('/')
  .get(controllerUSer.getAll);

// routerUser.route('/:id')
//   .get(controllerUSer.getById)
//   .patch(validateToken, controllerUSer.update)
//   .delete(controllerUSer.remove);

// routerUser.route('/sub/:channelId')
//   .patch(controllerUSer.subscribe);

// routerUser.route('/unsub/:channelId')
//   .patch(controllerUSer.unSubscribe);

// routerUser.route('/like/:videoId')
//   .patch(controllerUSer.like);

// routerUser.route('/dislike/:videoId')
//   .patch(controllerUSer.disLike);


module.exports = { routerUser };
