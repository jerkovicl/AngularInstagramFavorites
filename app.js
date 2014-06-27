var app = angular.module('ui.instagram', []);

app.controller('MainCtrl', function ($scope) {
    $scope.id = '19719473';
});

app.directive('ui-instagram', function () {
    return {
        restrict: 'AE',
        compile: function (elem) {
            elem.replaceWith(ui - instagram.toHTML(elem.html()));
        }
    }
});
