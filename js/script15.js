let digit = parseInt(prompt('Введите целое число'));
let a = 0;

for (let i = 1; i <= digit; i*=3) {

	if (3 * i === digit) {
		a++;
	} 
}

if (a > 0) {
	console.log('Введенное число можно получить путем возведения 3 в некоторую степень');
} else {
	console.log('Введенное число невозможно получить путем возведения 3 в некоторую степень');
}
