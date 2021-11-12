import { user } from '../model/schema';
export function editService( filter:any,change: any) {
    return new Promise((resolve)=>{
        user.findOneAndUpdate(filter, change, { new: true }, (err) => {
            if (!err) { 
                resolve(true)
            }
            else{
               resolve(false)
            }
        })
    })


}