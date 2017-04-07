// INSTRUCTIONS:
// 1. Bind click events to the +5 and -5 point buttons and
// change the innerHTML of the score display appropriately.


// 2. Bind a click event to the set score button and
// set the innerHTML of the score display
// to the score entered in the text box.


// 3. Create a check in your code
// to make sure the score will not go negative.

// 4. Create a function to make the changes to the score display
// rather than having to write your logic over and over

var game = {
	score: document.getElementById('score'),
	inScore: document.getElementById('increase-7'),
	deScore: document.getElementById('decrease-3'),
	custScoreBut: document.getElementById('submit-custom-score'),
	custScoreTxt: document.getElementById('custom-score'),
	s: 0
};
game.inScore.addEventListener('click', function() {
	game.s += 7;
	if (game.s >= 0 ) {
		game.score.innerHTML = game.s + ' pts';
	} else if (game.s < 0) {
		game.score.innerHTML = "whoops!";
	}
});
game.deScore.addEventListener('click', function() {
	game.s -= 3;
	if (game.s >= 0 ) {
		game.score.innerHTML = game.s + ' pts';
	} else if (game.s < 0) {
		game.score.innerHTML = "whoops!";
	}
});
game.custScoreBut.addEventListener('click', function() {
	var int = parseInt(game.custScoreTxt.value);
	console.log(int);
	game.s = int;
	game.score.innerHTML = int + ' pts';
});

// let arr = [1,2,3,4]
// let counter = 0;
// setInterval (function() {
// 	console.log(arr[counter++]);
// 	if(counter>3) counter = 0;
// }, 100);