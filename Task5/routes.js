const express = require('express');
let routes = express.Router();
const validate=require('./validate');
routes.get('/sub/:numberOne/:numberTwo',validate.Subtract);
routes.get('/add/:numberOne/:numberTwo',validate.Addition);
routes.get('/div/:numberOne/:numberTwo',validate.Division);
routes.get('/mul/:numberOne/:numberTwo',validate.Multiplication);
module.exports=routes;