const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res, next) => {
	res.send("Hello World!");
	console.log(req);
	console.log(res);
	console.log(next);
});

app.listen(port, () => console.log(`server on! http://localhost:${port}`));
