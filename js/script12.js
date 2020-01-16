let currency = 24;

for (let i = 10; i <= 100; i+=10) {
	let a = i * currency;
	document.write('<p>' + i + '$' + '-' + a + 'грн.' + '</p>');
}