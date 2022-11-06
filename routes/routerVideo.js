const { Router } = require('express');
const { validateToken } = require('../validateToken');

const routerVideo = Router();

routerVideo.post('/video', validateToken);
routerVideo.put('/video', validateToken);
routerVideo.delete('/video', validateToken);
routerVideo.get('/video', validateToken);

module.exports = { routerVideo };
