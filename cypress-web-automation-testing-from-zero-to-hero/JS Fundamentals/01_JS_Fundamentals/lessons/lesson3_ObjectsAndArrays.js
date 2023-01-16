// objects
let customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Mini", "Renault", "Peugeot"]
}
console.log(customer);
console.log(customer.firstName);
console.log(customer['lastName']);

// Dot notation
customer.firstName = "Mike";
// Bracket notation
customer['lastName'] = "Silver";
console.log(`${customer.firstName} ${customer.lastName}`);

// array
let car = ["BMW", "Volvo", "Toyota", "Mercedes", "Tesla"];
console.log(car);
console.log(car[0]);
car[0] = "Fiat";
console.log(car[0]);
console.log(customer.cars[1]);
