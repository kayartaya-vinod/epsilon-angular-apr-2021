const products = [
  { id: 1, name: "Onion", price: 34.0 },
  { id: 2, name: "Potato", price: 40.0 },
  { id: 3, name: "Tomato", price: 14.0 },
];

module.exports.getAllProductsHandler = (req, resp) => {
  resp.json(products);
};

module.exports.getOneProduct = (request, response) => {
  let id = request.params.productId;
  id = parseInt(id);

  let p = products.find((pr) => pr.id === id);
  if (p) {
    response.json(p);
  } else {
    response.status(404);
    response.send(`No data found for id ${id}`);
  }
};

module.exports.addNewProduct = (req, resp) => {
  const pr = req.body;
  pr.id = Math.max(...products.map((p) => p.id)) + 1;
  products.push(pr);
  resp.json(pr);
};
