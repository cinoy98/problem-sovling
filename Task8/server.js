const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routes = require("./routes");
const session = require("express-session");
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyparser.json());
app.use("/", routes);
app.listen(1000, function () {
  console.log("server running");
});
