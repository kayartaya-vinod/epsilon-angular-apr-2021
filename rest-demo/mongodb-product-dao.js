const url = "mongodb://localhost:27017";
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

// callback should executed by passing (err, data) as arguments
module.exports.getAllProducts = (callback) => {
  const client = new MongoClient(url);
  client.connect((err) => {
    if (err) {
      // report to the caller
      callback(err);
      return;
    }
    // connection succeeded
    const db = client.db("training");
    const products = db.collection("products");
    products.find().toArray((err, data) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, data);
    });
    client.close();
  });
};

module.exports.getOneProduct = (id, callback) => {
  const client = new MongoClient(url);
  client.connect((err) => {
    if (err) {
      // report to the caller
      callback(err);
      return;
    }
    // connection succeeded
    const db = client.db("training");
    const products = db.collection("products");
    try {
      const qry = { _id: ObjectID(id) }; //const ObjectID = require('mongodb').ObjectID;
      products.findOne(qry, (err, data) => {
        if (err) {
          callback(err);
          return;
        }
        callback(null, data);
      });
    } catch (err) {
      callback({ code: 1001, msg: "Invalid ID was supplied" });
      return;
    }

    client.close();
  });
};

module.exports.addNewProduct = (product, callback) => {
  const client = new MongoClient(url);
  client.connect((err) => {
    if (err) {
      // report to the caller
      callback(err);
      return;
    }
    // connection succeeded
    const db = client.db("training");
    const products = db.collection("products");
    products.insertOne(product, (err, result) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, { _id: result.insertedId, ...product });
    });
    client.close();
  });
};

module.exports.updateProduct = (id, product, callback) => {
  const client = new MongoClient(url);
  client.connect((err) => {
    if (err) {
      // report to the caller
      callback(err);
      return;
    }
    // connection succeeded
    const db = client.db("training");
    const products = db.collection("products");
    try {
      product._id = new ObjectID(id);
      products.updateOne(
        { _id: product._id },
        { $set: product },
        (err, result) => {
          if (err) {
            callback(err);
            return;
          }
          callback(null, { _id: result.insertedId, ...product });
        }
      );
    } catch (err) {
      callback({ code: 1001, msg: "Invalid ID was supplied" });
      return;
    }
    client.close();
  });
};

module.exports.deleteProduct = (id, callback) => {
  const client = new MongoClient(url);
  client.connect((err) => {
    if (err) {
      // report to the caller
      callback(err);
      return;
    }
    // connection succeeded
    const db = client.db("training");
    const products = db.collection("products");
    try {
      const qry = { _id: ObjectID(id) }; //const ObjectID = require('mongodb').ObjectID;
      products.deleteOne(qry, (err, data) => {
        if (err) {
          callback(err);
          return;
        }
        callback(null, data);
      });
    } catch (err) {
      callback({ code: 1001, msg: "Invalid ID was supplied" });
      return;
    }

    client.close();
  });
};
// npm i mongodb
