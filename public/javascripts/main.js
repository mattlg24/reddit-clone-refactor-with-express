var app = angular.module('redditCloneApp', ['ngRoute']) //stuff that happens at the app level

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/allPosts.html',
            controller: 'MainController'
        })
        .when('/onePost/:id', {
            templateUrl: '../views/onePost.html',
            controller: 'OnePostController'
        })
        // .when('/onePost/:id', {
        //     templateUrl: '/',
        //     controller: 'DeleteController'
        // })
})


//inject $http
