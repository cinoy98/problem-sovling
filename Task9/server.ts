import  express from 'express';
import * as bodyparser from 'body-parser';
import session from 'express-session';
import {routes} from './src/routes/routes';
import {logger} from './src/middlewares/logger';
import cookieParser from 'cookie-parser';
const cors = require('cors')
const app = express();
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
        cookie:{}
    })
);
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use('/',(req:any,res:any,next)=>{
    logger.info(req.headers);
    logger.info(res.headers);
    next();
})
app.use(cors());
app.use("/", routes);
app.listen(1000, function ():void {
    console.log("server running");
});
