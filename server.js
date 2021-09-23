const express=require("express");
const users=require("./MOCK_DATA (4).json");
const app=express();
app.get("/",function(req,res){
    res.send("Welcome to Home page")
})
app.get("/user",function(req,res){
    res.send(users);
})

app.listen(2345,function(){
    console.log("welcome")
})