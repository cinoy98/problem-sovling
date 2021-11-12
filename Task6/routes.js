const express = require('express');
const routes = express.Router();
var controller = require('./controller');
routes.get('/task',controller.getTasks);
routes.get('/task/:id',controller.getTaskById);
routes.delete('/task/:id',controller.deleteTaskById);
routes.post('/task/:name',controller.postTask);
routes.put('/task/:id/:name',controller.updateTaskById);
module.exports=routes;