const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); 

app.get("/", (req, res) => {
  res.send("Welcome to Task 2.2P Express Web Server!");
});


app.get("/add", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers provided.");
  }

  let sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
