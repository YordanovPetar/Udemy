let address1 = new Address('MainStreet', 'Sofia', 1000);
let address2 = new Address('MainStreet', 'Sofia', 1000);
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

// Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    let areEqual;

    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(adress1, address2) {
    return adress1 === address2;
}