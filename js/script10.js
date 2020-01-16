let a = 0;

for(let i = 1; i <= 10; i++) {
	a++;
		for(let b = 1; b <= 10; b++) { 
			document.write("<p>" + a + "*" + b + "=" + a * b + "</p>");
		}	
}