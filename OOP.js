class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static ageCompare(userA, userB) {
    if (userA.age > userB.age) {
      return (
        "l'utente " + userA.firstName + " è più vecchio di " + userB.firstName
      );
    } else {
      return (
        "l'utente " + userB.firstName + " è più vecchio di " + userA.firstName
      );
    }
  }
}

const Amedeo = new User("Amedeo", "Fallace", 20, "Trento");
const Giovanna = new User("Giovanna", "Lupi", 70, "Reggio Calabria");
const Filippo = new User("Filippo", "Bardi", 35, "Genova");

console.log(User.ageCompare(Amedeo, Giovanna));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static sameOwner(pet1, pet2) {
    if (pet1.ownerName === pet2.ownerName) {
      return (
        pet1 + " e " + pet2 + " hanno lo stesso padrone, che è " + ownerName
      );
    }
  }
}
