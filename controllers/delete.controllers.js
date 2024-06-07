const Product = require('../models/product.model.js');

// Delete by product ID controller
exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted sucessfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete by product name
exports.deleteByName = async (req, res) => {
  try {
    const { name } = req.params;
    const deletePro = await Product.findOneAndDelete({ name: name });
    if (!deletePro) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
