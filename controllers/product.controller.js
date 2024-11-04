const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Coffee Maker", category: "Appliances" },
  { id: 3, name: "Headphones", category: "Electronics" },
  { id: 4, name: "Running Shoes", category: "Footwear" },
];

function fetchAllProductDetails() {
  return products;
}

function fetchProductsDetailsById(id) {
  return products.find((product) => product.id === id);
}

function addProductDetails(items) {
  let newProducts = { id: products.length + 1, ...items };
  products.push(newProducts);
  return newProducts;
}

module.exports = {
  fetchAllProductDetails,
  fetchProductsDetailsById,
  addProductDetails,
};
