function isPrime(n) {
	let isPrime = true;
	const maxIndex = Math.floor(Math.sqrt(n));
	for (let i = 2; i <= maxIndex; i++) {
		if (n % i === 0) {
			isPrime = false;
		}
	}
	if (isPrime) {
		console.log(`${n} is prime`);
	}
	else {
		console.log(`${n} is not prime`);
	}
}
isPrime(7);
isPrime(83);


function isPrimee(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

isPrimee(72);
