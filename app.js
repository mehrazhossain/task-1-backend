const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors());

// routers
const productRoute = require('./routes/product.route');

app.get('/', (req, res) => {
  res.send('API is running..');
});

// product route base url
app.use('/api/v1/product', productRoute);

module.exports = app;
