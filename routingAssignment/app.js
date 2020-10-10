const express = require('express');
const app = express();
const port = 3000;

//homepage
app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!");
})

//animal voices
//define animal voice object
const animalVoice = {
    "pig":"Oink",
    "cow":"Moo",
    "dog":"Woof Woof!",
    "cat":"Meow",
    "donkey":"Hiha"
}
// use the colon before a pattern item
app.get("/speak/:animalName", function(req, res){
    //get request object
    const reqObject = req.params;
    console.log(reqObject);
    res.send(`The ${reqObject['animalName']} says ${animalVoice[reqObject["animalName"]]}`);
})

//printing out phrases a number of times
app.get("/repeat/:word/:num", function(req, res){
    const word = req.params['word'];
    const num = Number(req.params['num']);

    //create an empty string -> concatenate
    displayWord = "";
    //it in the loop -> send it
    for(let ii = 0; ii < num; ii++){
        displayWord = displayWord + " " + word;
        // console.log(displayWord);
    }
    res.send(displayWord);
})

//listener
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})