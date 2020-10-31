const LoginController = {
  errors: [],
  getUser() {
    return document.getElementById('login_username').value;
  },
  getPassword() {
    return document.getElementById('login_password').value;
  },
  validateEntry(user, pw) {
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if (!(user && pw)) this.failure('Please enter a username & password');
    else if (user.length < 5) this.failure('Password must be 5+ characters!');
    // * got here? validated!
    return true;
  },
  showDialog(title, msg) {
    console.log(title, msg);
  },
  failure(err) {
    this.errors.push(err);
    this.showDialog('Error', 'Login invalid: ' + err);
  },
};

// * Link `AuthController` to delegate to `LoginController`
let AuthController = Object.create(LoginController);

AuthController = {
  errors: [],
  checkAuth() {
    let user = this.getUser();
    let pw = this.getPassword();

    if (this.validateEntry(user, pw)) {
      this.server('/check-auth', {
        user: user,
        pw: pw,
      })
        .then(this.accepted.bind(this))
        .fail(this.rejected.bind(this));
    }
  },
  server(url, data) {
    return $.ajax({
      url: url,
      data: data,
    });
  },
  accepted() {
    this.showDialog('Success', 'Authenticated!');
  },
  rejected(err) {
    this.failure('Auth failed: ' + err);
  },
};

Object.setPrototypeOf(AuthController, LoginController);
