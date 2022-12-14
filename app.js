//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");
const date = require(__dirname+"/date.js");


const app = express();
const items = ["Buy Food","Eat Food","Cook Food"];
const workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    const day = date.getDate();
    res.render("list",{listTitle: day,newListItems: items});
    //it is like res.send,but in ejs we use res.render
});

app.post("/",function(req,res){

    const item = req.body.newItem

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List",newListItems: workItems});
})

app.post("/work",function(req,res){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000,function(){
    console.log("Server is running");
});

