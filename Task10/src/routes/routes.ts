
import express, { Router } from 'express'
const routes: Router = express.Router();

import { uuidview } from '../controllers/uuidView'

routes.get('/uuid', uuidview);
export { routes }
