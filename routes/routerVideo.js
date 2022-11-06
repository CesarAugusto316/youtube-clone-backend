const { Router } = require('express');
const { controllerVideo } = require('../controllers/controllerVideo');
const { validateToken } = require('../validateToken');


const videoRouter = Router();

videoRouter.path('/').post(validateToken, controllerVideo.add);
videoRouter.path('/:id').put(validateToken, controllerVideo.update);
videoRouter.path('/:id').delete(validateToken, controllerVideo.remove);
videoRouter.path('/:id').get(validateToken, controllerVideo.get);