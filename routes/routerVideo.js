const { Router } = require('express');
const { controllerVideo } = require('../controllers/controllerVideo');
const { validateToken } = require('../validateToken');


const routerVideo = Router();

routerVideo.route('/').post(validateToken, controllerVideo.add);
routerVideo.route('/:id').put(validateToken, controllerVideo.update);
routerVideo.route('/:id').delete(validateToken, controllerVideo.remove);
routerVideo.route('/:id').get(validateToken, controllerVideo.get);

module.exports = { routerVideo };