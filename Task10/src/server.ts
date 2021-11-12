import express from 'express';
import * as bodyparser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { routes } from './routes/routes';
import { logger } from './middlewares/logger';
import { Secret } from './constants/constants';
// import { db } from './database/database';
import cors from 'cors'
// db.on('error', (error) => { console.log(error) });
// db.once('open', function () {
//     console.log("connected to database");
// });
const app = express();
// app.use(cookieParser());
// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json());
app.use('/', (req: express.Request, res:any, next) => {
    logger.info(req.body);
    logger.info(res.body);
    next();
})
// app.use(
//     session({
//         secret: Secret,
//         resave: true,
//         saveUninitialized: true,
//         cookie: {}
//     })
// );
app.use(cors())
app.use("/", routes);
app.listen(1000, function (): void {
    console.log("server running");
});
