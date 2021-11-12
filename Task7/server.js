const express = require('express');
const app = express();
const logger = require('./logger');
const routes = require('./routes');
const { v4: uuidv4 } = require('uuid');
app.use('/',function(req,res,next){
        logger.info(uuidv4(),req.headers);
        logger.info(uuidv4(),res.headers);
        next();
    })
app.use('/',routes);
app.listen(1000,function(){
    console.log("server running");
})
