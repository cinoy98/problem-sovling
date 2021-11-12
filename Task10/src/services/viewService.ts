import { user } from '../model/schema';
export function viewService(decrypt: any) {
    return new Promise((resolve,reject) => {
        const query = user.findOne({ username: decrypt });
        query.select('name age gender dob address fathername maritalstatus');
        query.exec((err: any, res: any) => {
            if (!err) {
                resolve(res)
            }
            else {
                reject(err)
            }
        })
    }
 )
}
