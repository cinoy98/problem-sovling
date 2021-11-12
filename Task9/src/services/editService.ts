import {pool} from '../database/database'
export function editService(age:number,gender:string,fathername:string,dob:Date,maritalStatus:string,addres:string,password:string,decrypt:any) {
    return new Promise((resolve)=>{
        pool.query(
            "update user set age=?,gender=?,fatherName=?,DOB=?,maritalStatus=?,address=?,password=? where username =?", [age,gender,fathername,dob,maritalStatus,addres,password,decrypt], (err:any) => {
            if (!err) {
                resolve(true)
            }
            else{
               resolve(false)
            }
        })
    })
}