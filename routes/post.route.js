const express = require('express');
const postRoute = express.Router();

const Product = require('../models/product.model.js');

// POST route handler
postRoute.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = postRoute;
