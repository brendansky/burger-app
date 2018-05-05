var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");


var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT)
});