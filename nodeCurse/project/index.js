const express = require("express");
const app = express();

app.get("/",function (req, res){
    res.send("<h1>Welcome to my landing-page!</h1>")
});
app.get("/blog", function (req, res){
   res.send("<h1>Welcome to my blog!</h1>")
});
app.get("/channel", function (req, res){
   res.send("<h1>Welcome to my channel!</h1>")
});
app.get("/about/:number/", function(req, res){
    let loop = function(number = 10){
        for(let i = 0; i <= number; i++){
            console.log(`Count: ${i} to ${number}`);
        };
        return "loop run out"
    };
    let message  = loop(req.params.number);
    res.send(`<h3><b>${message} to ${req.params.number}<b></h3>`);
});
app.get('/hello/:name/:company', function (req, res){
    res.send(`<h1>Hello!, ${req.params.name} from the company Normalabs.</h1>`)
})
app.listen(4000,function (err){
    if(err){
        console.log("An error occurred while starting the server!");
    } else {
        console.log("server successfully started");
    }
})
