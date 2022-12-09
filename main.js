//Assignment 4c (File Download API)

var express=require('express'); 
var path=require('path');

var app=express();

app.get("/download",function(req,res){
    res.download("./uploads/screenshot.png",function(error){
        if(error){
            console.log("File Download Error!")
        }
        else{
            console.log("File Download successful")
        }
    })
})

app.listen(8080,function(){
    console.log("Server Run Success...")
})
