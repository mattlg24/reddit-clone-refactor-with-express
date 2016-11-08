var app = angular.module('redditCloneApp')

app.service('deleteService', function($http) {
    // console.log('i got to deleteService.js');
    return {
        delete: function(id) {
            return $http.delete(`/api/onePost/${id}`)
        }
    }

})
