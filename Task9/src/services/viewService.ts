import {pool} from '../database/database'
export function viewService(decrypt: any) {
    return new Promise((resolve,reject) => {
        pool.query(
            "select name,age,gender,fatherName,DOB,maritalStatus,address,phonenumber from user where username =?",
            [decrypt] ,(err:any,results:any)=> {
            if (!err) {
                resolve(results)
            }
            else {
                reject(err)
            }
        })
    }
 )
}