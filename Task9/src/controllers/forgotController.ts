import { forgotService } from '../services/forgotService';
import { validForgot } from '../validations/validForgot';
import { v4 as uuidv4 } from 'uuid';
import md5 from 'md5';
export async function Forgot(req: any, res: any) {
  let email: string = req.body.email;
  let phonenumber: string = req.body.phonenumber;
  let username: string = req.body.username;
  if (validForgot(req, res)) {
    let Password: string = uuidv4();
    let newPassword: string = md5(Password);
    let service = await forgotService(newPassword, email, username, phonenumber);
    if (service) {
      res.json({ message: "your password has been reset !!, kindly change the password with the one time password", Password });
    }
    else {
      res.json({ message: "Password change failed" });
    }
  }
  else {
    res.json({ message: "try again with correct input" })
  }
}