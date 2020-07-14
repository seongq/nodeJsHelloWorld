const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/hello", (req, res) => {
	res.render("hello", { name: req.query.nameQuery });
	console.log("query");
	console.log(req.query);
});

app.get("/hello/:nameParam", function (req, res) {
	res.render("hello", { name: req.params.nameParam });
	console.log("params");
	console.log(req.params);
});

app.listen(port, () => console.log(`server on! http://localhost:${port}`));
