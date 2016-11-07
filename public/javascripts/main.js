var app = angular.module('redditCloneApp', ['ngRoute']) //stuff that happens at the app level

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/allPosts.html',
            controller: 'MainController'
        })
})


//inject $http
