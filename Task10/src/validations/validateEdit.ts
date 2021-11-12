import { ValidGender, ValidStatus } from '../constants/constants'
export function validEdit(req:any,res: any) {
    let gender: string = req.body.gender
    let status: string = req.body.maritalStatus
    if (!ValidGender.test(gender)) {
        return false
    }
    if (!ValidStatus.test(status)) {
        return false
    }
return true
}