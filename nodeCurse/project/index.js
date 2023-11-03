const express = require("express");
const app = express();
const srvPort = 4000;


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.listen(srvPort, (err) => {
    if (err) {
        console.log(
            `An error occurred when trying to make the service available\n` ,
            "error:", err
        );
    } else {
        console.log(
            "#################################################\n" +
            `\tthe server is running on: ${srvPort}\n`
            + "#################################################"
        );
    };
});