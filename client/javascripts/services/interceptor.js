var app = angular.module('redditCloneApp')

app.factory('interceptorService', function($q) {
    // console.log('i got to interceptor service.js');
    return {
        'response': function(response) {
            // console.log('this was is the interceptor response', response);
            delete response.config
            return response
        }
    }
})
