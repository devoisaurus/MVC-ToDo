﻿(function () {
    angular.module("todo")
        .controller("addController", addController);

    addController.$inject = ["$scope"];

    function addController($scope) {
        $scope.welcome = "Add controller works";
    }
    
})();