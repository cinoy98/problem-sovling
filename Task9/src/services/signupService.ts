import {pool} from '../database/database'
export function signupService(username: string, name: string, email: string, password: string, age: number, gender: string, address: string, phonenumber: string, dob: string, fathername: string, maritalstatus: string) {
    return new Promise((resolve) => {
        pool.query(
            "insert into user values(?,?,?,?,?,?,?,?,?,?,?)",
            [username, name, email, password, age, gender, address, phonenumber, dob, fathername, maritalstatus]
            ,
            (err: any) => {
                if (!err) {
                        resolve(true)
                    }
                else {
                    resolve(false)
                }
            })
    });
}