(function () {
    angular.module("todo")
        .controller("listController", listController);

    listController.$inject = ["$scope"];

    function listController($scope) {
        scope.welcome = "list controller works";
    }

})();

