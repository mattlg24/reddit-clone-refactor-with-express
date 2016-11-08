var app = angular.module('redditCloneApp')

app.controller('OnePostController', ['$scope', '$http', '$routeParams', 'onePostService', 'deleteService', 'editService', '$location', function($scope, $http, $routeParams, onePostService, deleteService, editService, $location) {

    let id = $routeParams.id
        // console.log('post id is', id);

    onePostService.onePost(id)
        .then(function(results) {
            // console.log('OnePostController results are', results.data[0]);
            $scope.onePost = results.data[0]
        })

    $scope.deletePost = function() {
        // console.log('delete was clicked');
        deleteService.delete(id)
        $location.url('/')
    }

    $scope.editPost = function(post) {
        event.preventDefault()
            // console.log('edit was clicked');
        editService.edit(id, post)
            // .then(function(results) {
            //     console.log('edit results', results);
            // })

    }
}])
