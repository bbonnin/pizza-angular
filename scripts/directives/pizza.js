angular.module('Pizza', [])
    .directive('pizza', function ($timeout) {

        return {

            restrict : 'E',
            replace : true,
            scope : {
                pieData : '=data',
                pieId : '@pieId',
                pieOptions : '=options'
            },
            templateUrl : 'templates/pizza.html',
            link : function (scope, elem, attrs) {
                $timeout(function () {
                    Pizza.init();
                });
            }
        };

    });