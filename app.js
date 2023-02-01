//jshint esversion:6


const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const {Data} = require('dataclass');

class User extends Data {
    name = "Anon";
    surname = "Eyles"
    email = "anoneyles@email.com";
  }



let item1 = User.create({ name: "Liza", surname: "Jobs", email: "lizajobs@gmail.com" });
let item2 = User.create({ name: "Hacer", surname: "Karaosmanoglu", email: "hacerz@gmail.com" });

let items = [item1, item2];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {

    // Formating date object to a string.
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
 

    // Converts date to string.
    let day = today.toLocaleDateString("en-GB", options);

    // Calling EJS file to render.
    res.render("list", {
        kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res) {
    let name = req.body.exampleInputName;
    let surname = req.body.exampleInputSurname;
    let email = req.body.exampleInputEmail;

    let item = User.create({ name: name, surname: surname, email: email }); 
    items.push(item);

    res.redirect("/");

});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

// biricik esin sana cooook tesekkur ediyorrrr ve seni ccooookkkk seviyoooorrr <3 <3