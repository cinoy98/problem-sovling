import { ValidMail, ValidGender, ValidStatus } from '../constants/constants'
export function validSignup(req: any, res: any) {
    let email: string = req.body.email;
    let phone: string = req.body.phonenumber;
    let gender: string = req.body.gender;
    let status: string = req.body.maritalStatus;
    if (!ValidMail.test(email)) {
        return false;
    }
    if (phone.length != 10) {
        return false;
    }
    if (!ValidGender.test(gender)) {
        return false;
    }
    if (!ValidStatus.test(status)) {
        return false;
    }
return true;
}