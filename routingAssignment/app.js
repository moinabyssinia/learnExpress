const express = require('express');
const app = express();
const port = 3000;

//homepage
app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!");
})


//listener
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})