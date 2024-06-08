const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products.route.js');

const app = express();

// MiddleWare
app.use(express.json());

// Middleware adding product using
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect('mongodb://localhost:27017/nodeAPI')
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log('Connection failed: ', error);
  });

// Routes
app.use('/v1', productRoutes);

app.listen(5000, () => {
  console.log('running on port 5000');
});
