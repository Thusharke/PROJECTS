var express = require("express");
var app = express();
var path = require('path');

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname , 'views'));

app.get("/", function(req,res){
    res.redirect("/shopping_cart");
})
app.get("/collapsing_nav", (req,res) => {
    res.render("collapsing_nav/index.ejs");
})
app.get("/login_page", (req,res) => {
    res.render("login_Page/login.ejs");
})
app.get("/movie_poster", (req,res) => {
    res.render("movie poster/home.ejs");
})
app.get("/parallax_image", (req,res) => {
    res.render("Parallax image/index.ejs");
})
app.get("/photo_gallery", (req,res) => {
    res.render("photo gallery/index.ejs");
})
app.get("/resume", (req,res) => {
    res.render("Resume/index.ejs");
})
app.get("/rps", (req,res) => {
    res.render("Rock Paper Scissor game/index.ejs");
})
app.get("/shopping_cart", (req,res) => {
    res.render("Shopping cart/index.ejs");
})
app.get("/survey_form", (req,res) => {
    res.render("Survey Form/index.ejs");
})
app.get("/todolist", (req,res) => {
    res.render("ToDoList/index.ejs");
})

app.listen(process.env.PORT || 3000, function(err){
    if(!err){
        console.log("The server is running")
    }
})