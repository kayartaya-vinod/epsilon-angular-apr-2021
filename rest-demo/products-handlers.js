const dao = require("./mongodb-product-dao");

module.exports.getAllProductsHandler = (req, resp) => {
  dao.getAllProducts((err, data) => {
    if (err) {
      resp.status(500);
      resp.json(err);
    } else {
      resp.json(data);
    }
  });
};

module.exports.getOneProduct = (request, response) => {
  let id = request.params.productId;
  dao.getOneProduct(id, (err, data) => {
    if (err) {
      response.status(500);
      response.json(err);
    } else {
      response.json(data);
    }
  });
};

module.exports.addNewProduct = (req, resp) => {
  const pr = req.body;
  dao.addNewProduct(pr, (err, result) => {
    if (err) {
      resp.status(500);
      resp.json(err);
    } else {
      resp.json(result);
    }
  });
};
