angular.module('ui.instagram')
    .controller('NavbarCtrl', ['$scope', 'Auth',
        function ($scope, Auth) {
            $scope.logout = function () {
                Auth.logout();
            };
  }]);
