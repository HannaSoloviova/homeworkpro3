let a = 0;

for(let i = 30; i <= 80; i++) {

	if (i % 2 !== 0) {
		continue;
	}

	a = a + i;
}

document.write(a);