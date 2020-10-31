function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something);
	}

	function doAnother() {
		console.log( another.join( " ! ") );
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	}
}

var foo = CoolModule();

foo.doSomething();
foo.doAnother();

var singleton = (function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something);
	}
	function doAnother() {
		console.log( another.join( " ! " )
		)}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	}
})();

singleton.doSomething();
singleton.doAnother();

function IdentityModule(id) {
	function identify() {
		console.log(id);
	}
	return {
		identify: identify
	}
}

var foo1 = IdentityModule( 'foo 1');
var foo2 = IdentityModule( 'foo 2');

foo1.identify();
foo2.identify();
