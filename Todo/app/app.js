(function() {
    angular.module("todo", ["ngRoute"]);

    angular.module("todo")
        .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
            $routeProvider
            .when("/list", {
                templateUrl: "partials/list.html",
                controller: "listController"
                  })
            .when("/add", {
                        templateUrl: "partials/add.html",
                        controller: "addController"
                    })
            .when("/detail", {
                        templateUrl: "partials/detail.html",
                        controller: "detailController"
                    })
        }]);
})();