const express = require('express');
const app = express();
const parseDate = require("./modules/parseDate.js");

app.use(express.static(__dirname + '/public'));

app.get('/home', function (req, res) {
    
  res.send("Welcome Here");
});

app.get('/:times', function (req, res) {
  const date = req.params.times;
  const jsonData = parseDate(date);
    
  res.send(JSON.stringify(jsonData));
});



app.listen(process.env.PORT, function () {
  console.log('Example app listening on port:', process.env.PORT);
});