import { server}from 'websocket';
import http from 'http';
import {Redis} from './redis';
Redis.on("error",(err:Error)=>{
    console.log(`error : ${err.message}`)
}) 
let Server = http.createServer((Request,Response)=>{
    console.log(`Recieved request from ${Request.url}`);
})
const wsServer = new server();
wsServer.mount({
    httpServer:Server,
    autoAcceptConnections:false
})
Server.listen(1000,()=>{
    console.log(`listening to port 1000`);
})
wsServer.on("request",(Request)=>{
    console.log(`connection accepted from ${Request.host}`)
    let connection= Request.accept('echo-protocol',Request.origin)
    connection.on("message",(data)=>{
        console.log(`recieved at server: ${data.utf8Data}`)
    })
})
wsServer.on("connect",(connection)=>{
    function returnPrice(){
        Redis.lpop("stock",(err,reply)=>{
            connection.send(reply)
        })
    }
    if(connection.connected){
        setInterval(returnPrice,1000)
    }
})