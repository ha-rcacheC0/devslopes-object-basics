/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const dominos = {
  name: "Dominos",
  cuisines: ["pizza", "wings", "soda"],
  numberOfStars: 5,
  favorited: true,
};

dominos.address = "123 main st";
dominos.zipcode = 58401;
dominos.acceptsReservations = false;

dominos.numberOfStars += 1;
dominos.favorited = !dominos.favorited;
dominos.cuisines.push("salads");

const retrieveProperty = (object, key) => {
  if (object[key]) {
    return object[key];
  } else {
    return "The information you requested does not exist.";
  }
};

console.log(retrieveProperty(dominos, "cuisines"));
