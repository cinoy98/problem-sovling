import { v4 as uuidGenerate } from 'uuid'
export async function uuidview(req:any, res:any) {
    let requestId: string = "NUDC-" + uuidGenerate();
    res.status(200).send({ requestId: requestId });
}