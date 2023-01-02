const address = {
    street: 'Sezam',
    city: 'Gotham',
    zipCode: 345
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);