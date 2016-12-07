app.controller('SigninController', ['$scope', '$location', 'signinService', '$cookies', '$location', function($scope, $location, signinService, $cookies, $location) {


    $scope.signupForm = function(userObj) {
        // console.log('sign up was clicked');
        signinService.signup(userObj)
            .then(function(results) {
                console.log('signup results are', results);
                $cookies.putObject('loggedIn', results)
                var cookieData = $cookies.get('loggedIn')
                console.log('cookieData from signup',cookieData);
                $location.url('/posts')
            })
    }

    $scope.signinForm = function(userObj) {
        // console.log('sign in was clicked');
        signinService.signin(userObj)
            .then(function(results) {
                console.log('signin results are', results);
                $cookies.putObject('loggedIn', results.data)
                var cookieData = $cookies.get('loggedIn')
                console.log('cookieData',cookieData);
                $location.url('/posts')
            })
    }


}])
