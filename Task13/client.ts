import {client, connection} from 'websocket'
const Client:client= new client();
Client.connect('ws://localhost:1000/','echo-protocol')
Client.on("connect",(connection:connection)=>{
    console.log(`client connected`);
    connection.on("error",(err)=>{
        console.log(`connection error. ${err.message}`);
    })
    if(connection.connected){
        let stock:String="provide stock price"
        connection.send(stock)
        
    }
    connection.on("message",(data)=>{
        console.log(`stock price is : ${data.utf8Data}`)
    })

})