angular.module('look4me').factory('AuthFactory', AuthFactory);

function AuthFactory() {
  return {
    auth: auth
  };

  var auth = {
    isLoggedIn: false
  };
}
