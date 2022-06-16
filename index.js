const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// middle ware
// const samarMiddleware = (res, req, next) => {
//   console.log(req);
//   next();
// };

app.use(express.static(path.join(__dirname, "public")));
// app.use(samarMiddleware);

app.get("/hello/:name", (req, res) => {
  res.send("Heloo world " + req.params.name);
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  // res.status(500);
  res.json({ samar: 20 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
