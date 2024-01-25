
//the below code is for http server 
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  console.log(req.body);
  var height = Number(req.body.num1);
  var weight = Number(req.body.num2);

  var result = (weight) / (height*height);

  res.send("the result of your calculation is : "+ result);
});


app.listen(3000,function(){
  console.log("server is running");
});