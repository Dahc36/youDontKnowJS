
function foo() {
	this.a = 'fooA';
	return this;
}

const myObj = {
	a: 'a',
	foo,
};
const myObj2 = {
	b: 'b'
};
const myObj3 = new foo();

// Default binding
console.log(foo());

// Implicit binding
console.log(myObj.foo());

// Explicit binding
console.log(foo.call(myObj2));

// New binding
console.log(myObj3);
