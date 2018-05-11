var person = {
          name : 'Prashant',
          age : 33
};
var personJSON = JSON.stringify(person); // convert object to string
console.log(personJSON);
console.log(typeof personJSON);
var personObject = JSON.parse(personJSON); // convert string to object
console.log(personObject.age);
console.log(typeof personObject);

console.log('Challenge area');
var animal = '{"name" : "hatchiko"}';
//cnvert to js object

var animalObject = JSON.parse(animal);
//add age prop
animalObject.age = 2;

// convert backto json and print
var animalJSON = JSON.stringify(animalObject);
console.log(animalObject);
console.log(typeof animalObject);
console.log(animalJSON);
console.log(typeof animalJSON);









