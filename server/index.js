const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/')));

const port = 80;

app.listen(port, () => {
  console.log(`proxy listening at port ${port}`);
});
