let N = parseInt(prompt('Введите целое число'));

for (let i = 2; i < N; i++) {

	if (N % i === 0) {
		console.log('Число простое');
	}

}