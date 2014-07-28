(function () {
    angular.module('ui.instagram', []).service('Instagram', function ($http) {
        return {
            get: function (id, clientId, cb) {
                var URL;
                URL = "https://api.instagram.com/v1/users/" + id + "/media/recent/?client_id=" + clientId + "&callback=JSON_CALLBACK";
                $http.jsonp(URL).success(function (resolution) {
                    cb(resolution.data);
                });
            }
        };
    }).directive('uiInstagram', function (Instagram) {
        return {
            restrict: 'EA',
            scope: {
                userId: '=',
                clientId: '='
            },
            templateUrl: 'js/custom/instagramTpl.html',
            link: function (scope, element, attrs) {
                scope.grams = [];
                Instagram.get(scope.userId, scope.clientId, function (grams) {
                    scope.grams = grams;
                });
            }
        };
    });

}).call(this);

//8263704
//19719473
