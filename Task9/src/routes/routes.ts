import express, { Router } from 'express'
const routes:Router = express.Router();
import {authenticateToken} from '../middlewares/athenticate'
import { Edit } from '../controllers/editController';
import { Forgot } from '../controllers/forgotController';
import { Login } from '../controllers/loginController';
import { Signup } from '../controllers/signupController';
import { View } from '../controllers/viewController';
import { Logout } from '../controllers/logoutController';
routes.post("/signup", Signup);
routes.post("/login", Login);
routes.put("/forgot", Forgot);
routes.get("/view",authenticateToken, View);
routes.put("/edit",authenticateToken, Edit);
routes.get('/logout', Logout);
export { routes }