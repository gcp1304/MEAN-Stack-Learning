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
            }).success(function (post) {
                $scope.posts.unshift(post)
                $scope.postBody = null
            })
        }
    }
})
