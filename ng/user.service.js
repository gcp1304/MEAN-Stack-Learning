angular.module('app')
.service('UserService', function ($http) {
    var service = this
    service.getUser = function () {
        return $http.get('/api/users', {
            headers: { 'X-Auth': this.token }
        })
    }

    service.login = function (username, password) {
        return $http.post('/api/sessions', {
            username: username, password: password
        }).then(function (val) {
            service.token = val.data
            return service.getUser()
        })
    }
})
