//
// Object destucturing
//

const person = {
  name: "Nagehan",
  age: 34,
  location: {
    city: "Eindhoven",
    temp: 4,
  },
};

// const name = person.name;
// const age = person.age;
const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(publisherName);

//
// Array destructuring
//
const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];
const [, city1, state = "New York"] = address;
console.log(`You are in ${city1} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
