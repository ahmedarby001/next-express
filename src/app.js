const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 5050;


app.use(compression());
app.use(express.static(path.join(__dirname, '../out'), { extensions: ['html'] }));

app.listen(PORT, () => console.log('Server starts successful'));
