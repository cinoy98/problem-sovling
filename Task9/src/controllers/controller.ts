import jwt from 'jsonwebtoken';
import {Secret} from '../constants/constants'
import { Signup, Login, View, Forgot, Edit } from '../../services/services'
function signup(req: any, res: any) {
  let username: string = req.body.username;
  let name: string = req.body.name;
  let email: string = req.body.email;
  let password: string = req.body.password;
  let age: number = req.body.age;
  let gender: string = req.body.gender;
  let address: string = req.body.address;
  let phonenumber: string = req.body.phonenumber;
  let dob: string = req.body.dob;
  let fathername: string = req.body.fatherName;
  let maritalstatus: string = req.body.maritalStatus;
  Signup(res, username, name, email, password, age, gender, address, phonenumber, dob, fathername, maritalstatus)
}
async function login(req: any, res: any) {
  let username: string = req.body.username;
  let password: string = req.body.password;
  let x= await Login(username, password)
  res.json({message:x})/*{
    let token: string = jwt.sign(username, Secret);
    res.cookie('token', token, { httpOnly: true });
    res.json({message:"login successfull"})
  }
  else{
    res.json({ message: "ERROR: INCORRECT CREDENTIALS"});
  }*/
}
function view(req: any, res: any) {
  let token = req.cookies.token;
  if (!token) {
    res.json({ message: "ERROR: PLEASE LOGIN" })
  }
  else {
    let decrypt = jwt.verify(token.split(',')[0], Secret);
    View(res, decrypt);

  }
}
function forgot(req: any, res: any) {
  let email: string = req.body.email;
  let phonenumber: string = req.body.phonenumber;
  Forgot(res, email, phonenumber);
}
function edit(req: any, res: any) {
  let token = req.cookies.token;
  if (!token) {
    res.json({ message: "ERROR: PLEASE LOGIN" })
  }
  else {
    let decrypt = jwt.verify(token.split(',')[0], Secret);
    let age:number=req.body.age;
    let gender:string= req.body.gender;
    let fathernam:string=req.body.fatherName;
    let dob :Date= req.body.dob;
    let maritalStatus:string=req.body.maritalStatus
    let addres :string=req.body.address
    let password: string = jwt.sign(req.body.password, Secret);
    Edit(res,age,gender,fathernam,dob,maritalStatus,addres,password,decrypt)
  }
}
function logout(req:any, res:any) 
  {
    res.cookie('token', {}, {maxAge: -1}).json({message:"logged out"})
}
export { signup, login, view, forgot, edit ,logout}
