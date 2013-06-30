define(['globals', 'services'], function (globals) {
    'use strict';

    angular.module(globals.appName + '.filters', [globals.appName + '.services'])
        .filter('interpolate', ['version', function(version) {
            return function(text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }]);
});