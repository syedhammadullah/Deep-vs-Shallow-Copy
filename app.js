//  SHALLOW COPY

// original object
let original1 = {
  name: "Alice",
  address: {
    city: "Wonderland",
  },
};

// Shallow copy
let Shallowcopy = { ...original1 };
// shallow copy ke andar nested object ko modify kar rahay hain
Shallowcopy.address.city = "New Wonderland";

// check -->
console.log(original1.address.city); // output 'New Wonderland'
console.log(Shallowcopy.address.city); // output 'New Wonderland'

//   DEEP COPY

// original object
let original2 = {
  name: "Jack",
  address: {
    city: "Wonderland",
  },
};

// Deep copy using JSON methods
let deepCopy = JSON.parse(JSON.stringify(original2));

// deep copy ke andar nested object ko modify kar rahay hain
deepCopy.address.city= "New Wonderland"

// check -->
console.log(original2.address.city); // output 'Wonderland'
console.log(deepCopy.address.city); // output 'New Wonderland'

// Summary
// Shallow Copy: Changes to nested objects in the copy affect the original object.
// Deep Copy: Changes to nested objects in the copy do not affect the original object.
