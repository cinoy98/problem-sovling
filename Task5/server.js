const express = require('express');
const app = express();
const routes = require('./routes')
app.use('/',routes)
console.log("calculator is running");
app.listen(1000);