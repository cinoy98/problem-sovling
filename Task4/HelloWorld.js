const express= require('express');
const app=express();
app.get('/sample',function (req, res) {
    const name=req.query.display
    res.send('Hello World '+name);
 })
app.get('/sample/:display',function (req, res) {
    const name=req.params.display;
        res.send('Hello World '+name);
 })

 var server=app.listen(1000,function(){
    console.log("server running");
 });