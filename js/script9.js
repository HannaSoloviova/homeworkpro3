let digit = parseInt(prompt('Введите натуральное число'));
let quantityDigit = 0;
let sumDigit = 0;

for (let a = 1; a <= digit; a++) {

	if (digit % a !== 0) {
		continue;
	}

	console.log('Делитель введенного числа: ' + a);
}

for (let j = 1; j <= digit; j++) {

	if (digit % j === 0 && j % 2 === 0) {
		quantityDigit++;
	}

}

console.log('Количество четных делителей введенного числа: ' + quantityDigit);

for (let i = 1; i <= digit; i++) {

	if (digit % i === 0 && i % 2 === 0) {
		sumDigit = sumDigit + i;
	}

}

console.log('Сумма четных делителей числа: ' + sumDigit);	