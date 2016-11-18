var app = angular.module('redditCloneApp')

app.service('signinService', function($http) {
    // console.log('i got to signin service.js');
    return {
        signup: function(user) {
            return $http.post('/api/signup', user)
        },
        signin: function(user) {
            return $http.post('/api/signin', user)
        }
    }
})
