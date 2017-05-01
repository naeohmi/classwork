var cl = {
	toRedBut: document.getElementById('change-red'),
	toRedDiv: document.getElementById('to-red'),
	toGreenBut: document.getElementById('change-green'),
	toGreenDiv: document.getElementById('to-green'),
	toBlueBut: document.getElementById('change-blue'),
	toBlueDiv: document.getElementById('to-blue')
};

cl.toRedBut.addEventListener('click', function() {
	cl.toRedDiv.setAttribute('style', 'background-color: red');
});

cl.toGreenBut.addEventListener('click', function() {
	cl.toGreenDiv.setAttribute('style', 'background-color: green');
});

cl.toBlueBut.addEventListener('click', function() {
	cl.toBlueDiv.setAttribute('style', 'background-color: blue');
});

var sz = {
	toBigBut: document.getElementById('change-big'),
	toBigDiv: document.getElementById('to-big'),
	toSmallBut: document.getElementById('change-small'),
	toSmallDiv: document.getElementById('to-small'),
	toAnBut: document.getElementById('change-an'),
	toAnDiv: document.getElementById('to-an')
};

sz.toBigBut.addEventListener('click', function() {
	sz.toBigDiv.setAttribute('style', 'width: 150%');
});

sz.toSmallBut.addEventListener('click', function() {
	sz.toSmallDiv.setAttribute('style', 'width: 50%');
});
sz.toAnBut.addEventListener('click', function() {

	sz.toAnDiv.classList.add('move');
});
