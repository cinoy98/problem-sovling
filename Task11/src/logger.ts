import winston from 'winston'
const logger:any=winston.createLogger({
    transports:[
        new winston.transports.File({
            filename:'redis.log',
            level:'info'
        })
    ],
    format:winston.format.combine(winston.format.timestamp(),winston.format.json())
})
export {logger};