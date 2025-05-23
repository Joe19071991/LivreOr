let express = require("express");
let app = express();
const bodyParser = require("body-parser");

// Moteur de template
app.set("view engine", "ejs");

//Middleware
app.use("/assets", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.render("pages/index", { test: "Hello World" });
});

app.post("/", (req, res) => {
  if (req.body.message === undefined || req.body.message === "") {
    res.redirect("/");
  }
});

app.listen(8885);
