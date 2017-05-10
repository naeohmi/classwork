const car = function() {
    let currentPosition = 0;
    let actions = {
        drive(d = 10) {
            // var d = d || 10; //truethy or falsey - if true - use d if false - use 10
            currentPosition += d;
            return this;
        },
        reverse(r = 5) {
            // var r = r || 5;
            currentPosition -= r;
            return this;
        },
        where() {
            console.log(currentPosition);
            return this;
        }
    };
    return actions;
}

let myCar = car();
myCar.drive().where().drive().where();
// myCar.drive();
// myCar.where();
// myCar.reverse()
// myCar.where();


// http://babeljs.io/ -- try it out: 

// "use strict";

// var car = function car() {
//     var currentPosition = 0;
//     var actions = {
//         drive: function drive() {
//             var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

//             // var d = d || 10; //truethy or falsey - if true - use d if false - use 10
//             currentPosition += d;
//             return this;
//         },
//         reverse: function reverse() {
//             var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

//             // var r = r || 5;
//             currentPosition -= r;
//             return this;
//         },
//         where: function where() {
//             console.log(currentPosition);
//             return this;
//         }
//     };
//     return actions;
// };

// var myCar = car();
// myCar.drive().where().drive().where();


const arr = [1, 2, 3, 4, 5];

let newArr1 = arr.map((e, i) => {
    return e + i;
})
console.log(newArr1);
//returns [1,3,5,7,9];

let newArr2 = arr.filter((e, i) => {
    return i > 2;
})
console.log(newArr2)
    //returns [4,5];