(function () {
    angular.module("todo")
        .controller("addController", addController);

    addController.$inject = ["$scope"];

    function addController($scope) {
        $scope.welcome = "Add controller works";


        //you don't need to pre-define properties, but the object needs to exist
        $scope.todo = {
            name: "",
            isComplete: false
        };

        $scope.submit = function(todo) {
            console.log(todo);
        }
    }

})();
