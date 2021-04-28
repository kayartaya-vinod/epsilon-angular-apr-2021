const axios = require("axios");

const url = "http://vinbasket.herokuapp.com/products/23";

// const p = axios.get(url);
// console.log(p);
// // when the promis is resolved (successfully executed)
// p.then(() => console.log("promise resolved"));
// // when the promise is rejected
// p.catch(() => console.log("Promise was not resolved!"));

axios
  .get(url)
  .then((resp) => resp.data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

axios
  .get("http://localhost:50000/api/products")
  .then((resp) => resp.data)
  .then(console.log)
  .catch(console.log);

async function goGetData() {
  try {
    const resp = await axios.get("http://vinbasket.herokuapp.com/products/12");
    const data = resp.data;
    console.log(data);
  } catch (err) {
    console.log("There was an error: ", err);
  }
}

const pr = goGetData();
console.log("pr is", pr);
