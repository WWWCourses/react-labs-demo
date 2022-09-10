function foo() {
	let seconds = 3;

	setInterval(() => {
		console.log(`seconds = ${seconds}`);
	}, 1000);
}

console.log( foo() );