var express = require('express'),
    bodyparser = require('body-parser'),
    port = process.env.PORT || 3000;


var app = express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.get("/",function(req,res){
    res.redirect("/home");
});

app.get("/home",function(req,res){
    res.render("index");
});



app.listen(port)
