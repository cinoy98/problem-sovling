import { signupService } from '../services/signupService'
import { signupInput } from '../constants/constants'
import md5 from 'md5'
import { validSignup } from '../validations/signupValidate';
export async function Signup(req: any, res: any) {
  let password: string = md5(req.body.password);
  var userdata: signupInput = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: password,
    age: req.body.age,
    gender: req.body.gender,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
    dob: req.body.dob,
    fathername: req.body.fatherName,
    maritalstatus: req.body.maritalStatus,
  }
  if (validSignup(req, res)) {
    let service = await signupService(userdata)
    if(service){
      res.json({message:"signed up"})
    }
    else{
      res.json({message:"signup failed"})
    }
  }
  else {
    res.json({ message: "try again correctly" })
  }

}