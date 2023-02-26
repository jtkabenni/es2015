//Same keys and values ES2015

const createInstructor = (firstName, lastName) => ({
  firstName,
  lastName,
});

//Computed Property Names ES2015
const favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite",
};

//Object Methods ES2015
const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

//CreateAnimal function

const createAnimal = (species, makeSound, sound) => ({
  species,

  [makeSound]() {
    return sound;
  },
});
