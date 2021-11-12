import { response } from 'express';
import { user } from '../model/schema';
export function signupService(userdata: any) {
    return new Promise((resolve) => {
        user.create(userdata, (err: any) => {
            if (!err) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        });
    })

}
