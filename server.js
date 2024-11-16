const express = require("express");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 3000; 
// app.use(express.static("public"));

// app.listen(3000);

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials")

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
   res.render("about", {
    userName: "Joe", 
    age: 15,
   });
})

app.listen(port, () => {
    console.log("The server is running on port 3000");
    
})