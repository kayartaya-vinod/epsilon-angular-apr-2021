const p1 = {
  name: "vinod",
  city: "bangalore",
  email: "vinod@vinod.co",
};

let city = "mysore";
// const name = p1.name;
// const city = p1["city"];

// object destructuring
let { name, city: place, phone } = p1; // place -> variable;

console.log("name is", name);
console.log("place is", place);
console.log("phone is", phone);
// console.log("email is", email);
