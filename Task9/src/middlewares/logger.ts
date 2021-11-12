import winston from 'winston'
const logger:any=winston.createLogger({
    transports:[
        new winston.transports.File({
            filename:'middlewares/logs/module.log',
            level:'info'
        })  
    ],
    
    format:winston.format.combine(winston.format.timestamp(),winston.format.json())
})

export {logger};