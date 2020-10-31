function User() {
  var username, password;

  function doLogin(user, pw) {
    username = user;
    password = pw;
    console.log(`Your logged in with ${username} and ${password}`);
  }

  var publicAPI = {
    login: doLogin,
  };

  return publicAPI;
}

var fred = User();

fred.login('fred', '12Battery34!');
