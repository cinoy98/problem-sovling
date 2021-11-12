import {pool } from '../database/database';
export function loginService(Username: string, Password: string) {
        return new Promise((resolve, reject) => {
            pool.query(
                "select * from user where username =? and password =?",
                [Username, Password]
                ,
                (err: any, results: any) => {
                    if(!err){
                        if (results[0]!=null) {
                            resolve(true)
                        } else {
                            resolve(false)
                        }
                    }
                else{
                    reject(err)
                }
                })
        });
}