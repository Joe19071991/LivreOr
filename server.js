let app = require("express")();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index", { test: "Hello World" });
});

app.listen(8885);
