// Hoisting
numberOne = 1;

console.log(numberOne + 2);

var numberOne;

// var e let
var firstName = 'João';
var lastName = 'Souza';

if (firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva';

    console.log(firstName, lastName);
}

console.log(firstName, lastName);