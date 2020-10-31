const Widget = {
  init: function (width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.elem = null;
  },
  insert: function (where) {
    this.where = where;
    if (this.elem) {
      this.elem.style.width = this.width + 'px';
      this.elem.style.height = this.height + 'px';
      this.where.appendChild(this.elem);
    }
  },
};

const Button = Object.create(Widget);

Button.setup = function (width, height, label) {
  this.init(width, height);
  this.label = label || 'Default';

  this.elem = document.createElement('button');
  this.elem.textContent = this.label;
};

Button.build = function (where) {
  this.where = where;
  this.insert(where);
  this.elem.addEventListener('click', (e) => {
    this.onClick.bind(this);
  });
};
Button.onClick = function (evt) {
  console.log('Button ' + this.label + ' clicked!');
};

const ready = (callback) => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};

ready(() => {
  let body = document.getElementsByTagName('body');

  const btn1 = Object.create(Button);
  btn1.setup(125, 30, 'Hello');

  const btn2 = Object.create(Button);
  btn2.setup(150, 40, 'World');

  btn1.build(body);
  btn2.build(body);
});
