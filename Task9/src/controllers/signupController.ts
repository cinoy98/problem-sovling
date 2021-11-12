import { signupService } from '../services/signupService'
import md5 from 'md5'
import { validSignup } from '../validations/signupValidate';
export async function Signup(req: any, res: any) {
  let password: string = md5(req.body.password);
  let username: string = req.body.username;
  let name: string = req.body.name;
  let email: string = req.body.email;
  let age: number = req.body.age;
  let gender: string = req.body.gender;
  let address: string = req.body.address;
  let phonenumber: string = req.body.phonenumber;
  let dob: string = req.body.dob;
  let fathername: string = req.body.fatherName;
  let maritalstatus: string = req.body.maritalStatus;
  if (validSignup(req, res)) {
    let service = await signupService(username, name, email, password, age, gender, address, phonenumber, dob, fathername, maritalstatus)
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