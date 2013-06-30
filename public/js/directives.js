define(['globals', 'services'], function(globals, services) {
    'use strict';

    angular.module(globals.appName + '.directives', [globals.appName + '.services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }]);
});