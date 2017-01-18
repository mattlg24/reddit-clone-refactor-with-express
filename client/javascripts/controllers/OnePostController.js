app.controller('OnePostController', ['$scope', '$http', '$routeParams', 'onePostService', 'deleteService', 'editService', '$location', '$cookies', function($scope, $http, $routeParams, onePostService, deleteService, editService, $location, $cookies) {

    const cookie = $cookies.getObject('loggedIn')
    // console.log('cookies are', cookie);

    let id = $routeParams.id

    onePostService.onePost(id)
        .then(function(results) {
            // console.log('OnePostController results are', results.data[0]);
            $scope.cookie = cookie
            $scope.onePost = results.data[0]
            console.log('post.user_id is', $scope.onePost.user_id);
            console.log('cookies user id is', cookie.id);
        })

    $scope.deletePost = function() {
        deleteService.delete(id)
        $location.url('/posts')
    }

    $scope.editPost = function(post) {
        event.preventDefault()
        editService.edit(id, post)
            // .then(function(results) {
            //     console.log('edit results', results);
            // })
    }
}])
