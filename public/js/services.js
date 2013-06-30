define(['globals'], function (globals) {
    'use strict';

    return angular.module(globals.appName + '.services', [])
        .factory('exampleService', function ($rootScope) {
            var service = {};
            service.text = '';

            service.test = function (text) {
                this.text = text;
                $rootScope.$broadcast('test');
            };

            return service;
        })
        .value('version', '0.1');
});