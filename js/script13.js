let N = parseInt(prompt('Введите целое число'));

for (let a = 1; a <= 100; a++) {

	if (a * a <= N) {
		console.log(a);
	}

}