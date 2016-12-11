angular.module('app')
.controller('PostsController', function($scope, PostsService) {
    PostsService.fetch().success(function (posts) {
        $scope.posts = posts
    })

    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsService.create({
                username: 'jayplabs',
                body: $scope.postBody
            }).success(function () {
                $scope.postBody = null
            })
        }
    }

    $scope.$on('ws:new_post', function (_, post) {
        $scope.$apply(function () {
            $scope.posts.unshift(post)
        })
    })
})
