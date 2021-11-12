import redis from 'redis'
import {promisify} from 'util'
async function app(){
    const client = redis.createClient();
    const setAsync = promisify(client.set).bind(client);
    const getAsync = promisify(client.get).bind(client);
    await setAsync('school', 'kendriya vidyalaya');
    const data = await getAsync('school');
    console.log(data);
};
export{app}