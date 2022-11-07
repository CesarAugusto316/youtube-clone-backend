const { Router } = require('express');
const { controllerVideo } = require('../controllers/controllerVideo');
const { validateToken } = require('../middlewares/validateToken');


const routerVideo = Router();

routerVideo.route('/')
  .post(validateToken, controllerVideo.add);

routerVideo.use(validateToken).route('/:id')
  .get(controllerVideo.get)
  .put(controllerVideo.update)
  .delete(controllerVideo.remove);

module.exports = { routerVideo };
