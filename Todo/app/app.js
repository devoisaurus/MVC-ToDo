(function() {
    angular.module("todo", ["ngRoute"]);

    angular.module("todo")
    .controller("homeController", ["$scope", function($scope) {
            $scope.welcome = "Hello, world";
        }]);

    //minified
    angular.module("todo")
        .controller("listController", listController);

    listController.$inject = ["$scope"];

    function listController($scope) {
        
    }

    angular.module("todo")
        .controller("detailController", detailController);

    detailController.$inject = ["$scope"];

    function detailController($scope) {

    }

    angular.module("todo")
        .controller("addController", addController);

    addController.$inject = ["$scope"];

    function addController($scope) {

    }


})();