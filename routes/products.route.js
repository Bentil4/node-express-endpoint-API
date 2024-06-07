const express = require('express');
const router = express.Router();
const getControllers = require('../controllers/get.controllers.js');
const postControllers = require('../controllers/post.controllers.js');
const updateControllers = require('../controllers/update.controllers.js');
const deleteControllers = require('../controllers/delete.controllers.js');

// GET CONTROLLERS
// Getting all product
router.get('/all-products', getControllers.allProduct);

// Getting all product
router.get('/product/:id', getControllers.productById);

// Getting all product
router.get('/product/search/:name', getControllers.productByName);

// Getting all product
router.get('/product/category/:category', getControllers.productByCategory);

// POST CONTROLLERS
router.post('/products', postControllers.addProducts);

// PUT / UPDATE CONTROLLER
router.put('/product/update/:id', updateControllers.updateProduct);

// DELETE CONTROLLER
// Delete by ID
router.delete('/product/delete/:id', deleteControllers.deleteById);

// Delete by product name
router.delete('/product/delete/name/:name', deleteControllers.deleteByName);

module.exports = router;
