angular.module('app')
.controller('LoginController', function ($scope, UserService) {
    $scope.login = function(username, password) {
        UserService.login(username, password)
        .then(function (user) {
            console.log(user)
        })
    }
})
