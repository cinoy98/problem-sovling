import { user } from '../model/schema';
export function forgotService(password:string,email: string, username: string, phonenumber: string) {
    let filter = { $and: [{ username: username }, { email: email },{phonenumber:phonenumber}] }
    let update = { password: password }
    return new Promise((resolve)=>{
        user.updateOne(filter,{$set:update} ,{new:true},(err,doc)=>{
            if((!err)&&(doc.nModified==1)){
                resolve(true)
            }
            else{
                resolve(false)
            }
        })
    })

}