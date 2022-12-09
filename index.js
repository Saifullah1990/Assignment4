//Assignment 4b (File Upload API) 

var express=require('express');
var multer=require('multer');
var path = require('path');

var app=express();

var storage=multer.diskStorage({
    destination:function(req,file,callBack){
        callBack(null,'./uploads')
    },
    filename:function(req,file,callBack){
        callBack(null,file.originalname)
    }
})

// Validation for "jpg" and "png" image file upload only 
var upload=multer({
    storage:storage, 
    fileFilter: function(req,file,callBack){
var filetypes = /jpg|png/;
var mimetype = filetypes.test(file.mimetype);
var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

if (mimetype && extname) {
return callBack(null, true);
}
else{
callBack("Error: File upload only supports the following filetypes- " + filetypes)
    }
}
}).single("myfile");

app.post('/',function(req,res){
    upload(req,res,function(error){
        if (error){
            res.send("File upload failed!!!")
        }
        else{
            res.send("File uploaded successfully!!!")
        }
    })
})

app.listen(8000,function(){
    console.log("Server run success...")
});