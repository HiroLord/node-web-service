const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(4000, function () {
  console.log('Express app listening on port 4000!')
})