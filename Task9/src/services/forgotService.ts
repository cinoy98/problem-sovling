
import { pool } from '../database/database';
export function forgotService(password:string,email: string, username: string, phonenumber: string) {
    return new Promise((resolve, reject) => {
        pool.query("update user set password =? where email=? and phonenumber=? and username=?", [password, email, phonenumber,username], (err: any) =>{
            if (!err) {
                    resolve(true)
                }

            else {
                resolve(false)
            }
        })
    })
}