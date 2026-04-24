import lodash from "lodash";

let obj1 = {
  id: 1,
  name: "John",
  address: { city: "Delhi", demo: function () {} },
};

// let obj2 = { ...obj1 }; // shallow
// let obj2 = structuredClone(obj1); // deep
// let obj2 = lodash.cloneDeep(obj1);
let obj2 = lodash.clone(obj1);

// obj2.name = "Raj";
// obj2.address.city = "Noida";

console.log(obj1);
console.log(obj2);
