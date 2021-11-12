import { viewService } from '../services/viewService'
import jwt from 'jsonwebtoken';
import { Secret } from '../constants/constants'
export async function View(req: any, res: any, next: any) {
    let token = req.cookies.token;
    if (token) {
        let decrypt = jwt.verify(token.split(',')[0], Secret);
        let service = await viewService(decrypt);
        res.json({message:service});
    }
}