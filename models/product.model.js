const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter product name'],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    category: {
      type: String,
      required: [true, 'Enter product category'],
    },

    image: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
