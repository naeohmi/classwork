function testMe() {
    let x = 1;
    let y = 2;
    let z = 3;

    let a = function() {
        // console.log('Hi, I am a child a');
        console.log(x + y + z);
    }
    return a;
}

let catchMe = testMe();
catchMe(); //saves the values/variables doesnt let the garbage collector get them 

function closurePractice() {
    let secret = 'dont tell!'

    let a = function() {
        return secret;
    }
    return a;
}

let saved = closurePractice();
console.log(saved());