import jwt from 'jsonwebtoken';
import md5 from 'md5'
import { Secret } from '../constants/constants';
import { validEdit } from '../validations/validateEdit';
import { editService } from '../services/editService';
export async function Edit(req: any, res: any) {
    let token = req.cookies.token;
    if (token) {
        let decrypt = jwt.verify(token.split(',')[0], Secret);
        let age:number=req.body.age;
        let gender:string= req.body.gender;
        let fathername:string=req.body.fatherName;
        let dob :Date= req.body.dob;
        let maritalStatus:string=req.body.maritalStatus
        let address :string=req.body.address
        let password:string=md5(req.body.password)
        if (validEdit(req, res)) {
            let service = await editService( age,gender,fathername,dob,maritalStatus,address,password,decrypt)
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