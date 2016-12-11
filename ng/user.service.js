angular.module('app')
.service('UserService', function ($http) {
    var service = this
    service.getUser = function () {
        return $http.get('/api/users')
    }

    service.login = function (username, password) {
        return $http.post('/api/sessions', {
            username: username, password: password
        }).then(function (response) {
            service.token = response.data
            $http.defaults.headers.common['X-Auth'] = response.data
            return service.getUser()
        })
    }
})
