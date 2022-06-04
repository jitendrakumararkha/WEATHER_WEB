var  express=require('express');
var app =express();
const path=require('path');
const static_path=path.join(__dirname,"/views");


app.use(express.static(static_path));
app.set('view engine','ejs');
app.get("",function(req,res){
    res.render("index1");
});
app.get("/about",function(req,res){
    res.render('abouts');
});
  app.get("/weather",function(req,res){
    res.render('weather');
});
app.get("*",function(req,res){
    res.render('404error');
});


var  server=app.listen(5000,()=>{
    console.log("server running 5000");

});
