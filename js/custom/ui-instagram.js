var app =
    angular.module('ui.instagram', []);

app.service('Instagram', function ($http) {
    return {
        get: function (id, clientId, cb) {
            var URL;
            URL = "https://api.instagram.com/v1/users/" + id + "/media/recent/?client_id=" + clientId + "&callback=JSON_CALLBACK";
            $http.jsonp(URL).success(function (resolution) {
                cb(resolution.data);
            });
        }
    };
});
app.directive('uiInstagram', function (Instagram) {
    return {
        restrict: 'EA',
        scope: {
            userId: '=',
            clientId: '='

        },
        template: '<img ng-repeat="gram in grams" ng-src="{{ gram.images.standard_resolution.url }}"></img>',
        link: function (scope, element, attrs) {
            console.log(scope);
            scope.grams = [];
            Instagram.get(scope.userId, scope.clientId, function (grams) {
                console.log(grams);
                scope.grams = grams;
            });
        }
    };
});

app.controller("demoCtrl", function ($scope) {
    $scope.users = [{
        id: 19719473,
        clientId: "8a607f8a109b4e04a831fe0309ceff0b"
    }, {
        id: 8263704,
        clientId: "8a607f8a109b4e04a831fe0309ceff0b"
    }];
});
