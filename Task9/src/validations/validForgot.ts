import { ValidMail} from '../constants/constants'
export function validForgot(req: any, res: any) {
    let email: string = req.body.email;
    let phone: string = req.body.phonenumber;
    if (!ValidMail.test(email)) {
        return false
    }
    if (phone.length != 10) {
        return false
    }
return true
}