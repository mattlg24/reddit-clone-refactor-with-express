app.controller('MainController', ['$scope', '$http', 'postsService', '$cookies', function($scope, $http, postsService, $cookies) {

    $scope.view = {}
    $scope.post = {}
    $scope.commentForm = {};

    const cookie = $cookies.getObject('loggedIn') //use this to maybe show edit or delete button on a post if cookie.id = posts.user.id
    // console.log('cookie.data is', cookie.data);

    $scope.logout = function() {
        $cookies.remove('loggedIn')
    }

    postsService.getPosts()
        .then(function(results) {
            // console.log('MainController results are', results.data);
            $scope.allPosts = results.data
        })

    $scope.newPost = function(obj) {
      $scope.post.user_id = cookie.data.id
      console.log('Scope.post.user_id', cookie.data.id);
        event.preventDefault()
            // console.log('am i getting here?');
        postsService.newPost(obj)
            .then(function(results) {
                console.log('controller new post results are', results.data);
            })
        $scope.post.date = new Date()
        $scope.allPosts.push($scope.post)
            // console.log('all posts are', $scope.allPosts);
            console.log('the post is', $scope.post);
            // console.log('all posts length', $scope.allPosts.length);
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
