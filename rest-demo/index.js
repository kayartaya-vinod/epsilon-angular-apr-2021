const express = require("express");
const {
  getAllProductsHandler,
  getOneProduct,
  addNewProduct,
} = require("./products-handlers");
const bp = require("body-parser");

const server = express();
server.use(bp.json());

// a request from another computer should send the following information:
// protocol - ex: http, jdbc, mysql, oracle
// location of the server - ip addr or name. ex: localhost, 127.0.0.1, www.vinod.co
// port - numbers representing a specific server. ex: mysql->3306, oracle->1521
//          0-1024 are reserved usually by OS
//          1025-65535 can be used by other s/w

const fn = (req, resp) => {
  console.log(`Got a request from ${req.ip} (${req.hostname})`);
  resp.write("<h1>Hello, world!</h1>");
  resp.write("<hr>");
  resp.write("<p>Developed by Vinod; Powered by ExpressJS</p>");
  resp.end();
};

server.get("/", fn);

// middleware is a function that is registered with express, and is executed
// for every request; middleware should be defined before defining routes
server.use((req, resp, next) => {
  // add CORS headers
  resp.set("Access-Control-Allow-Origin", "*");
  resp.set("Access-Control-Allow-Headers", "*");
  resp.set("Access-Control-Allow-Methods", "*");
  next(); // pass the control to the next handler
});

// we are mapping a handler function to a url path
server.get("/api/products", getAllProductsHandler);
server.get("/api/products/:productId", getOneProduct);
server.post("/api/products", addNewProduct);

// talk to the OS to reserve port 50000 for our server
const port = 50000;
server.listen(port, () => console.log(`server started at port ${port}`));
console.log("end of script");

// npm init --> create package.json
// npm init -y --> create package.json with out asking any questions
