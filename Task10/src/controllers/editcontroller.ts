import jwt from 'jsonwebtoken';
import md5 from 'md5'
import { Secret } from '../constants/constants';
import { validEdit } from '../validations/validateEdit';
import { editService } from '../services/editService';
export async function Edit(req: any, res: any) {
    let token = req.cookies.token;
    if (token) {
        let decrypt = jwt.verify(token.split(',')[0], Secret);
        var change = {
            age: req.body.age,
            gender: req.body.gender,
            fathername: req.body.fathername,
            dob: req.body.dob,
            maritalstatus: req.body.maritalStatus,
            address: req.body.address,
            password: md5(req.body.password)
        }
        let filter= {username:decrypt}
        if (validEdit(req, res)) {
            let service = await editService( filter,change)
            if(service){
                res.json({ message: "Changes has been done" })
            }
            else{
                res.json({ message: "error, Changes not saved" });
            }
        }
        else {
            res.json({ message: "try again with correct input" })
        }

    }
}