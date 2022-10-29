const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors());

// routers
const productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');

app.get('/', (req, res) => {
  res.send('API is running..');
});

// routes base url
app.use('/api/v1/product', productRoute);
app.use('/api/v1/user', userRoute);

module.exports = app;
