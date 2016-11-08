var app = angular.module('redditCloneApp')

app.service('onePostService', function($http) {
    // console.log('I got here allPostsService.js');
    return {
        onePost: function(id) {
            return $http.get(`/api/posts/${id}`)
        }
    }
})
