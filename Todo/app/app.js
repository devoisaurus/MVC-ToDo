(function() {
    angular.module("todo", ["ngRoute"]);

    angular.module("todo")
    .controller("homeController", ["$scope", function($scope) {
            $scope.welcome = "Hello, world";
        }]);

    //minified
    angular.module("todo")
        .controller("todoController", todoController);

    todoController.$inject = ["$scope"];

    function todoController($scope) {
        
    }
})();