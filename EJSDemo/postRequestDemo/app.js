// create an app to list friends 

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
port = 3000;

app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({extended:true}));

//define friends array - global scope
const friends = ["awet", "maria", "alphonse", "ahmed", "melissa", "soheyla"]

//route
app.get("/", function(req, res){
    res.render("home");
})

app.post("/addfriend", function(req, res){
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    //install package for this
    //require it above
    // res.send("You have reached the post route!");

    // this refreshes the page momentarily 
    res.redirect("/friends")
})

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
})

app.listen(port, () => {
    console.log("serving your site");
})