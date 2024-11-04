const express = require("express");
const app = express();
const port = 3000;

const {
  fetchAllProductDetails,
  fetchProductsDetailsById,
  addProductDetails,
} = require("./controllers/product.controller");

app.use(express.json());

app.get("/products", (req, res) => {
  let result = fetchAllProductDetails();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "products not found" });
  }
});

app.get("/products/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let result = fetchProductsDetailsById(id);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "product not found" });
  }
});

app.post("/products/new", (req, res) => {
  let newProduct = req.body;
  let result = addProductDetails(newProduct);
  if (result) {
    res.status(201).json(result);
  } else {
    res.status(404).json({ message: "product not created" });
  }
});

module.exports = { app, port };
