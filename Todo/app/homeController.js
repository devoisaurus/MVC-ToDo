(function () {
    angular.module("todo")
        .controller("homeController", ["$scope", function ($scope) {
            $scope.welcome = "home controller works";


        }]);
})();


