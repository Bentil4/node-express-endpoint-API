const express = require('express');
const route = express.Router();

const Product = require('../models/product.model.js');

// GET route handler

// Getting all products
route.get('/all-products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get product by ID
route.get('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Find product by name
route.get('/product/search/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const productName = await Product.findOne({ name: name });
    if (!productName) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(productName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Find products by categories
route.get('/product/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const categories = await Product.find({ category: category });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = route;
