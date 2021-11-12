import { loginService } from '../services/loginService'
import { Secret } from '../constants/constants'
import jwt from 'jsonwebtoken'
import md5 from 'md5'
export async function Login(req: any, res: any) {
    let username: string = req.body.username;
    let password: string = md5(req.body.password);
    if (username && password) {
        let service = await loginService(username, password)
        if (service) {
            let token: string = jwt.sign(username, Secret);
            res.cookie('token', token, { httpOnly: true });
            req.session.logged = true;
            res.json({ message: "login successfull" })
        }
        else {
            res.json({ message: "login failed" })
        }
    }
    else {
        res.json({ message: "Please enter username and password" });
    }
}