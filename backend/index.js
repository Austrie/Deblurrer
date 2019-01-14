const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.render('home')
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on " + (process.env.PORT ? process.env.PORT : '5000'));
});
