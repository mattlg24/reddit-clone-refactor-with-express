var app = angular.module('redditCloneApp')

app.service('postsService', function($http) {
    console.log('I got here allPostsService.js');
    return {
        getPosts: function() {
            return $http.get('/api/allposts')
                // .then(function(response) {
                //     return response.data
                // })
        }
    }
})
