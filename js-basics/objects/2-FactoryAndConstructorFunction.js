// Factory function
function createAddress(street, city, zipCode) {
  return {
    street: street,
    city: city,
    zipCode: zipCode
  };
}

const address1 = createAddress('Boulevard', 'Varna', 9000);
console.log(address1);

// Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address('MainStreet', 'Sofia', 1000);
console.log(address2);