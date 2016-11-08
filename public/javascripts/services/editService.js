var app = angular.module('redditCloneApp')

app.service('editService', function($http, $routeParams) {
    // console.log('i got to editService.js');
    return {
        edit: function(id, editObject) {
            return $http.put(`/api/onePost/${id}`, editObject)
        }
    }

})
