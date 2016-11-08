var app = angular.module('redditCloneApp')

app.controller('OnePostController', ['$scope', '$http', '$routeParams', 'onePostService', function($scope, $http, $routeParams, onePostService) {

    let id = $routeParams.id
        // console.log('post id is', id);

    onePostService.onePost(id)
        .then(function(results) {
            // console.log('OnePostController results are', results.data[0]);
            $scope.onePost = results.data[0]
        })
}])
