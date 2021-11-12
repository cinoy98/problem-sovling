const winston = require('winston');
const logger=winston.createLogger({
    transports:[
        new winston.transports.File({
            filename:'CRUD.log',
            level:'info',
            json:true,
            
        })   
    ],
    format:winston.format.combine(winston.format.timestamp(),winston.format.json()),
})

module.exports=logger;