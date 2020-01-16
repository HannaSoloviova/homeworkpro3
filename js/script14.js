let N = parseInt(prompt('Введите целое число'));
let a = 0;

for (let i = 2; i < N; i++) {

	if (N % i === 0) {
		a++;
	}

}

if (a > 0) {
	console.log('Введенное число не является простым');
} else {
	console.log('Введенное число является простым');
}
