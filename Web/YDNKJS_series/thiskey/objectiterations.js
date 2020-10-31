var myArray = [1,2,3];
var it = myArray[Symbol.iterator]();

/*
console.log(
it.next(),
it.next(),
it.next(),
it.next()
);
*/

var myObject = {
	a: 2,
	b: 3
};

Object.defineProperty( myObject, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function() {
		var o = this;
		var idx = 0;
		var ks = Object.keys(o);
		return {
			next: function() {
				return {
					value: o[ks[idx++]],
					done: (idx > ks.length)
				}
			}
		}
	}
});

// Iterate `myObject` manually
var it = myObject[Symbol.iterator]();

console.log(
	it.next(),
	it.next(),
	it.next());

// iterate `myObject` with foo..of
for (let v of myObject) {
	console.log(v);
}


// Limited randoms
var randoms = {
	[Symbol.iterator]: function() {
		return {
			next: function() {
				return { value: Math.floor(Math.random() * 100)}
			}
		}
	}
}

var randoms_pool = [];
for (var n of randoms) {
	randoms_pool.push(n);

	if(randoms_pool.length === 100) break;
}

/*
for (let v of randoms_pool) {
	console.log(v);
}
*/

var that = randoms_pool[Symbol.iterator]();
console.log(that.next());
// console.log(randoms_pool);
















