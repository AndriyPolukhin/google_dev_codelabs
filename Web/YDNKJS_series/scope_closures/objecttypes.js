var strPrimitive = 'I am a string';

// console.log(typeof strPrimitive);
// console.log(strPrimitive instanceof String);

// console.log(strPrimitive.length);
// console.log(strPrimitive.charAt(3));

var strObject = new String('I am a string ');
// console.log(typeof strObject);
// console.log(strObject instanceof String);

// console.log(Object.prototype.toString.call(strObject));

// var prefix = 'foo';

// var myObject = {
//   [prefix + 'bar']: 'hello',
//   [prefix + 'baz']: 'world',
//   [Symbol + prefix]: 'hello world',
// };

// console.log(myObject);

// function foo() {
//   console.log('foo');
// }

// var someFoo = foo;

// var myObject = {
//   someFoo: foo,
// };

// console.log(foo);
// console.log(someFoo);
// console.log(myObject.someFoo);

var myObject = {
  foo: function () {
    console.log('foo');
  },
};

var someFoo = myObject.foo;

// console.log(someFoo);
// console.log(myObject.foo);

// var myArray = ['foo', 42, 'bar'];
// console.log(myArray.length);
// console.log(myArray[0]);
// myArray.baz = 'baz';
// console.log(myArray.length);
// console.log(myArray.baz);
// console.log(myArray);
/*
function anotherFunction() {}
var anotherObject = { c: true };
var anotherArray = [];
var myObject = {
  a: 2,
  b: anotherObject,
  c: anotherArray,
  d: anotherFunction,
};

// anotherArray.push(anotherObject, myObject);

// var testObj = JSON.parse(JSON.stringify(myObject));
// console.log(testObj);

// var newObj = Object.assign({}, myObject);
// console.log(newObj.a);
// console.log(newObj.b === anotherObject);
// console.log(newObj.c === anotherArray);
// console.log(newObj.d === anotherFunction);

*/

/*
var myObject = {
  a: 2,
};
myObject.a = 3;
// console.log(myObject.a);
Object.defineProperty(myObject, 'a', {
  value: 4,
  writable: true,
  configurable: false,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));
console.log(myObject.a);
myObject.a = 5;
console.log(myObject.a);

Object.defineProperty(myObject, 'a', {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true,
});
*/

var myObject = {
  a: 2,
};

console.log(myObject.a);
delete myObject.a;
console.log(myObject.a);

Object.defineProperty(myObject, 'a', {
  value: 2,
  writable: true,
  configurable: false,
  enumerable: true,
});

console.log(myObject.a);
delete myObject.a;
console.log(myObject.a);
