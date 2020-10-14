/* render html files */
const express = require('express');
const app = express();
port = 3000;

//tell express to serve from this folder
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    //create a seprate file first
    //write an HTML - render it here
    //but this will only send back
    //the exact same page
    //we want an HTML that contains 
    //a variable from the route
    res.render("home.ejs");
})

app.get("/faithassembly/:ministry", function(req, res){
    const ministry = req.params.ministry;
    console.log(ministry);
    const ministries = {
        "thevoice":"thevoice.ejs"
    }
    const consumer = "Yared";
    res.render(ministries[ministry], {user: consumer});
})
app.get("/posts", function(req, res){
    const posts = [
        {title: "The Voice Conference", author:"Faith Assembly"},
        {title: "Vision Conference", author:"Bridges"},
        {title: "Winter Conference", author:"Other"}
    ];
    res.render("posts.ejs", {posts: posts})
})

//get input from the user
app.get('/life-academy', function(req, res){
    let age; 
    res.render("ageGroup.ejs", {ageValue:age});
})

app.listen(port, () => {
    console.log("server is listening!")
})