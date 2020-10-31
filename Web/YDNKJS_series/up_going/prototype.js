var foo = {
  a: 42,
};

// * Create `bar` and link it to `foo`
var bar = Object.create(foo);

bar.b = 'hello world';

bar.b;
bar.a;
