// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
function getProperty(obj, key) {
    return obj[key];
}
var person = {
    name: "Alice",
    age: 25,
    isStudent: true,
};
var namea = getProperty(person, "name");
console.log(namea);
