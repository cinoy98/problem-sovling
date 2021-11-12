import { logger } from '../middlewares/logger';
import { user } from '../model/schema';
export function loginService(Username: string, Password: string) {
    return new Promise((resolve, reject) => {
        const query = user.findOne({ $and: [{ username: Username }, { password: Password }] }, { password: 0 })
        query.exec((err: any, res: any) => {
            if (!err) {
                if (res != null) {
                    resolve(true)
                }
                else {
                    resolve(false);
                }
            }
            else {
                reject(err)
            }
        })
    })
}
