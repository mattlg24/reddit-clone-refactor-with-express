var app = angular.module('redditCloneApp', ['ngRoute', 'ngCookies']) //stuff that happens at the app level

app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/signup.html',
            controller: 'SigninController'
        })
        .when('/signin', {
            templateUrl: '../views/signin.html',
            controller: 'SigninController'
        })
        .when('/posts', {
            templateUrl: '../views/allPosts.html',
            controller: 'MainController'
        })
        .when('/onePost/:id', {
            templateUrl: '../views/onePost.html',
            controller: 'OnePostController'
        })
    $httpProvider.interceptors.push('interceptorService')
})


//inject $http
