//Assignment 4a (POST API with URL Query, Body and Header Properties)

var express=require('express'); 
var bodyParser=require('body-parser'); 

var app=express(); 

// POST API with Body Properties  

app.use(bodyParser.json());

app.post("/",function(req,res){
    let JSONData=req.body;  
    let JSONString=JSON.stringify(JSONData);

    res.send(JSONString);
});

// POST API with Header Properties  

app.post("/",function(req,res){
    let username=req.header('user');
    let password=req.header('pass'); 

    res.send("Username: "+username+" "+"Password: "+password);
});

// POST API with URL Query 

app.post("/",function(req,res){

    let name= req.query.name;
    let occupation=req.query.occupation;

    res.send(name+" "+"is an"+" "+occupation);
});

app.listen(8000,function(){
    console.log("Server run success...")
})