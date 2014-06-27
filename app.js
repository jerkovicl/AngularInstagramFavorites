angular.module('ui.instagram', ['ngResource', 'ngRoute', 'mgcrea.ngStrap'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: '/index.html'
                })
                .when('/add', {
                    templateUrl: '/index.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
  }]);
