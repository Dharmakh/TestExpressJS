const express = require("express");
const app = express();

app.get("/api/testApi", (req, res) => {
	res.send({ Hi: "There!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
