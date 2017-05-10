// ______________________________
// PART ONE A - (WITHOUT ES6 CLASSES)
// ______________________________

//1. Create a fish class using a constructor function.
// It should have the properties name, length and color.
// function Fish(name, length, color) {
//     this.name = name;
//     this.length = length;
//     this.color = color;
// }
// // 2. Extend the fish prototype with a method glub
// //  that console logs 'My name is [name] and I glub you!'.
// Fish.prototype.glub = function() {
//     console.log(`My name is ${this.name} and I glub you!`);
// };
// // 3. Create a new instance of the fish class with:
// //  name 'Boring fish', length 5 cm, and color orange.
// var boringFish = new Fish('Boring Fish', 5, 'orange');
// //4. Test out it's method to see if it glubs you.
// boringFish.glub();
// // 5. Using the constructor pattern, create a child class of fish, 
// // called Goldfish that has a property diet.
// function Goldfish(name, length, color, diet) {
//     Fish.call(this, name, length, diet);
//     this.diet = 'blood worms';
// };
// // 6. Create a new instance of Goldfish with:
// //  name Gustave, length 10cm, color black and diet blood worms.
// var gustave = new Goldfish('Gustave', 10, 'black', 'blood worms');
// console.log(gustave);

// //7. Using the Prototypal pattern Create a new child class of fish
// // called Cichlid with a boolean property called mean.
// Cichlid.prototype = Object.create(Fish.prototype);
// Cichlid.prototype.mean = true;
// //8. Create a new instance of Cichlid named Prince with a length of 5cm
// // and color purple and mean false.
// var prince = new Cichlid('Prince', 5, 'purple', false);

// ______________________________
// PART ONE B - (WITH ES6 CLASSES)
// ______________________________

// 1. Create a fish class using a constructor function.
// It should have the properties name, length and color.
// 2. Extend the fish prototype with a method glub
//  that console logs 'My name is [name] and I glub you!'.
class Fish {
    constructor(name, length, color) {
        this.name = name;
        this.length = length;
        this.color = color;
    }
};



// 3. Create a new instance of the fish class with:
//  name 'Boring fish', length 5 cm, and color orange.
var boringFish = new Fish('Boring Fish', 5, 'orange');
//4. Test out it's method to see if it glubs you.
boringFish.glub();
// 5. Using the constructor pattern, create a child class of fish, 
// called Goldfish that has a property diet.
function Goldfish(name, length, color, diet) {
    Fish.call(this, name, length, diet);
    this.diet = 'blood worms';
};
// 6. Create a new instance of Goldfish with:
//  name Gustave, length 10cm, color black and diet blood worms.
var gustave = new Goldfish('Gustave', 10, 'black', 'blood worms');
console.log(gustave);

//7. Using the Prototypal pattern Create a new child class of fish
// called Cichlid with a boolean property called mean.
Cichlid.prototype = Object.create(Fish.prototype);
Cichlid.prototype.mean = true;
//8. Create a new instance of Cichlid named Prince with a length of 5cm
// and color purple and mean false.
var prince = new Cichlid('Prince', 5, 'purple', false);

// __________ 
// PART TWO 
// __________