/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //
papaJohns.grabCategories = function (object) {
  return Object.keys(object);
};

const verifyValues = (object, number) => {
  if (Object.values(object).length === number) {
    return true;
  } else {
    return false;
  }
};

const getToppingsInfo = (object) => {
  return Object.entries(object.pizzaToppings);
};

papaJohns.printAd = function (topping) {
  return `"Welcome to ${papaJohns.name}! We are located at ${papaJohns.address}. This week, we are having a sale on ${topping} for $${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}"`;
};

console.log(papaJohns.printAd("bacon"));
