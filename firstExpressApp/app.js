const express = require('express');
const app = express();
const port = 3000;

// "/" => "Hi there"
app.get("/", function( req, res){
    //req and res are objects 
    //containing all info about 
    //request and response 
    res.send("Hi there!");
})
// "/bye" => "Goodbye"
app.get("/bye", function(req, res){
    res.send("Goodbye!")
})
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    console.log("someone made a request to /dog");
    res.send("MEOW!")
})
////Colt's way of listening - using cloud9
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server has started!");
// });

//listening locally
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})