/* render html files */
const express = require('express');
const app = express();
port = 3000;

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
    res.render(ministries[ministry]);
})



app.listen(port, () => {
    console.log("server is listening!")
})