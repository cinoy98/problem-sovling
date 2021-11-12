"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_1 = require("websocket");
var Client = new websocket_1.client();
Client.connect('ws://localhost:1000/', 'echo-protocol');
Client.on("connect", function (connection) {
    console.log("client connected");
    connection.on('error', function (error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on("message", function (data) {
        console.log(data);
    });
    function sendHi() {
        if (connection.connected) {
            console.log();
            var wish = "hi";
            //console.log(wish)
            connection.send(wish);
        }
    }
    sendHi();
});
