var app = angular.module('redditCloneApp')

app.controller('MainController', ['$scope', '$http', 'postsService', function($scope, $http, postsService) {

    $scope.view = {}

    postsService.getPosts()
        .then(function(results) {
            console.log('MainController results are', results.data);
            $scope.allPosts = results.data
        })

    $scope.post = {}
    $scope.commentForm = {};

    function createNewId() {
        let newId = $scope.view.posts.length
            // console.log('newid is', newId);
        return newId
    }

    $scope.downVote = function(post) {
        post.votes--
    }
    $scope.upVote = function(post) {
        // console.log('post', post);
        post.votes++
    }

    $scope.submitPostForm = function() {
        event.preventDefault()
            // console.log('post info', post);
        $scope.post.id = createNewId()
        $scope.post.votes = 0
        $scope.post.date = new Date()
        $scope.post.momentDate = moment().calendar()
        $scope.post.comments = []
        $scope.view.posts.push($scope.post)
        $scope.post = ''
        $scope.postForm.$setPristine()
    }



    $scope.submitCommentForm = function(post) {
        console.log('post is', post);
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
