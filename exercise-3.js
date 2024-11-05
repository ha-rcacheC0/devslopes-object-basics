// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

const printPizzaPlace = (object) => {
  return Object.entries(object);
};

const toppingsPriceRange = (object) => {
  let pizzaToppings = Object.values(object.pizzaToppings);
  let min = Math.min(...pizzaToppings);
  let max = Math.max(...pizzaToppings);
  return [min, max];
};

// console.log(toppingsPriceRange(dominos));

const calculateAverageRating = (object) => {
  let rating = Object.values(object.starReviews);
  let newRating = rating.reduce((t, e) => {
    return (t += e);
  });

  return newRating / rating.length;
};
console.log(calculateAverageRating(dominos).toFixed(1));
