//server side
import {connection, server} from 'websocket';
import http from 'http'
let Server= http.createServer((Request,Response)=>{
    console.log(`request recieved from ${Request.url}`)
})
const wsServer= new server()
wsServer.mount({
    httpServer:Server,
    autoAcceptConnections:false
})
Server.listen(1000,()=>{
    console.log(`listening on port 1000`)
})
wsServer.on("request",(Request)=>{
    console.log((new Date()) + ' Connection accepted.');
    let connection= Request.accept('echo-protocol',Request.origin)
    connection.on("message",(data)=>{
        console.log(`recieved ${data.utf8Data}`);
    })
})
wsServer.on("connect",(connection)=>{
    connection.on("message",(data)=>{
        console.log("recieved",data)
    }) 
})


