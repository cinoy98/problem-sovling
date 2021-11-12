import {client} from 'websocket'
const Client =new client();
Client.connect('ws://localhost:1000/','echo-protocol')
Client.on("connect",(connection)=>{
    console.log("client connected");
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on("message",(data)=>{
        console.log(data)
    })
    function sendHi(){
        if(connection.connected){
            console.log()
            let wish="hi";
            //console.log(wish)
            connection.send(wish)
        }
    }
    sendHi();
})

