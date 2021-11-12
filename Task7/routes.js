const express = require('express');
const routes = express.Router();
const cors = require('cors');
let corsOptions={
    origin:true,
    methods:["GET,POST,PUT,DELETE"]
}
var controller = require('./controller');
routes.get('/task',cors(corsOptions),controller.getTasks);
routes.get('/task/:id',cors(corsOptions),controller.getTaskById);
routes.delete('/task/:id',cors(corsOptions),controller.deleteTaskById);
routes.post('/task/:name',cors(corsOptions),controller.postTask);
routes.put('/task/:id/:name',cors(corsOptions),controller.updateTaskById);
module.exports=routes;