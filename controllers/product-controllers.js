const products = require("../models/products");

const getAllProducts = (req, res, next) => {
  res.json(products);
};

const getOneProduct = (req, res, next) => {
  const product = products.find((item) => item.id === req.params.id);

  res.json(product);
};
exports.getAllProducts = getAllProducts;
exports.getOneProduct = getOneProduct;
