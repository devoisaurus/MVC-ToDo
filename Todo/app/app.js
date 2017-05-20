(function() {
    angular.module('todo', ['ng-route']);

    angular.module('todo')
    .controller('homeController', ['$scope', function($scope) {
            
    }]);

    angular.module('todo')
        .controller('todoController', todoController);

    todoController.$inject = ['$scope'];

    function todoController($scope) {
        
    }
})();