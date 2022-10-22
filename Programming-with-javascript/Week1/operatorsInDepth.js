/*
Logical AND operator: && 

Logical OR operator: || 

Logical NOT operator: ! 

The modulus operator: % 

The equality operator: ==

The strict equality operator: ===

The inequality operator: !=

The strict inequality operator: !==

The addition assignment operator: += 

The concatenation assignment operator: += (it's the same as the previous one - more on that later)
*/

/* The logical AND operator in JS (&&)

console.log(true && true) will output: true 
console.log(true && false) will output: false 
console.log(false && true) will output: false 
console.log(false && false) will output: false

*/
/*
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
*/
//----------------------------


/* The logical OR operator in JS (||)

console.log(true || true) will output: true 
console.log(true || false) will output: true  
console.log(false || true) will output: true  
console.log(false || false) will output: false

*/

/*
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);
*/
//--------------------------------

/* The logical NOT operator in JS (!)*/

/*
var petHungry = true;

console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);
*/

//--------------------------------

/* The modulus operator in JS (%)

The modulus operator is another mathematical operator in JavaScript. It returns the remainder of division.

*/

//console.log(11 % 2);

//--------------------------------

// The equality operator (==)
// The equality operator checks if two values are equal.

// The strict equality operator (===)
// The strict equality operator compares for both the values and the data types.

// The inequality operator (!=)
// The inequality operator checks if two values are not the same, but it does not check against the difference in types.

// The strict inequality operator (!==)
// For the strict inequality operator to return false, the compared values have to have the same value and the same data type. 

// O operador da atribuição de concatenação (+=)

var longString = "";
longString += "Era";
longString += " uma";
longString += " vez";
longString += "...";
console.log(longString);