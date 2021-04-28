const firstname = "Vinod";
const lastname = "Kumar";

const p1 = {
  firstname,
  lastname,
  city: "Bangalore",
  phone: "9731424784",
  address: {
    state: "Karnataka",
  },
  favColors: ["red", "black"],
};

console.log(p1);

const p2 = { firstname: p1.firstname, lastname: p1.lastname, city: "Mysore" };
console.log(p2);

const p3 = { ...p1, city: "Tumkur", email: "vinod@vinod.co" };
const p4 = { city: "Tumkur", ...p1 };
console.log(p3);
console.log(p4);

const p1a = p1; // p1a is a reference to the same object, being referred by p1
const p1b = { ...p1 }; // clone

console.log("p1===p1a is", p1 === p1a);
console.log("p1===p1b is", p1 === p1b);

p1b.city = "Delhi";
p1b.address.state = "Delhi";
p1.favColors.push("yellow");

console.log(p1);
console.log(p1b);
