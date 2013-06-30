define(
    [   'globals',
        'filters',
        'services',
        'directives',
        'controllers'
    ],
    function (globals, filters, services, directives, controllers) {
        'use strict';

        /* kudos: http://stackoverflow.com/questions/12603914/reset-form-to-pristine-state-angularjs-1-0-x */
        angular.resetForm = function (scope, formName, defaults) {
            var elm = document.querySelectorAll('form[name=' + formName + '], form[name=' + formName + '] .ng-dirty');
            angular.element(elm).removeClass('ng-dirty').addClass('ng-pristine');
            var form = scope[formName];
            form.$dirty = false;
            form.$pristine = true;
            for (var field in form) {
                if (form[field].$pristine === false) {
                    form[field].$pristine = true;
                }
                if (form[field].$dirty === true) {
                    form[field].$dirty = false;
                }
            }
            for (var d in defaults) {
                scope[d] = defaults[d];
            }
        };

        return angular.module(
            globals.appName,
            [
                'ui.bootstrap',
                globals.appName + '.controllers',
                globals.appName + '.filters',
                globals.appName + '.services',
                globals.appName + '.directives'
            ]
        ).config(['$interpolateProvider', function ($interpolateProvider) {
            $interpolateProvider.startSymbol(globals.interpolateProvider.startSymbol);
            $interpolateProvider.endSymbol(globals.interpolateProvider.endSymbol);
        }]);
    }
);