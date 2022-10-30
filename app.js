const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser('secretKey'));

// routers
const productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');
const loginRoute = require('./routes/login.route');

app.get('/', (req, res) => {
  res.send('API is running..');
});

// routes base url
app.use('/api/v1/product', productRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/user', loginRoute);

module.exports = app;
