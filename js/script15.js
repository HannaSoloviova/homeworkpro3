let digit = parseInt(prompt('Введите целое число'));

for (let i = 1; i <= digit; i*=3) {

	if (3 * i !== digit) {
		continue;
	} 

	console.log('Введенное число можно получить путем возведения 3 в некоторую степень');
}