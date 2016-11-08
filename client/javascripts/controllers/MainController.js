var app = angular.module('redditCloneApp')

app.controller('MainController', ['$scope', '$http', 'postsService', function($scope, $http, postsService) {

    $scope.view = {}
    $scope.post = {}
    $scope.commentForm = {};

    postsService.getPosts()
        .then(function(results) {
            // console.log('MainController results are', results.data);
            $scope.allPosts = results.data
        })

    $scope.newPost = function(obj) {
        event.preventDefault()
            // console.log('am i getting here?');
        postsService.newPost(obj)
            .then(function(results) {
                console.log('controller results are', results.data);
            })
        $scope.post.date = new Date()
        $scope.allPosts.push($scope.post)
        console.log('all posts are', $scope.allPosts);
        console.log('all posts length', $scope.allPosts.length);
        $scope.post = ''
        $scope.postForm.$setPristine()
    }

    $scope.downVote = function(post) {
        post.votes--
    }
    $scope.upVote = function(post) {
        // console.log('post', post);
        post.votes++
    }

    $scope.submitCommentForm = function(post) {
        // console.log('post is', post);
        // $log.info('all posts...............', $scope.posts)
        event.preventDefault()
            // console.log('postid', post.id);
        let id = post.id
        var newComment = angular.copy(post.commentForm)
            // console.log('newComment is', newComment);
        $scope.view.posts[id].comments.push(newComment)
        post.commentForm = {}
        post.showCommentForm = false
        this.commentSection = true
    }

    $scope.orderVal = '-votes'
}])
