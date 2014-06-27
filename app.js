angular.module('ui.instagram', ['ngResource', 'ngRoute', 'mgcrea.ngStrap'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html'
                })
                .when('/add', {
                    templateUrl: 'views/user.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
  }]);
