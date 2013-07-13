define(['globals'], function (globals) {
    'use strict';

    var exampleService = ['$rootScope', '$resource', '$q', function ($rootScope, $resource, $q) {
        var service = {};
        service.text = '';

        service.broadcastText = function (text) {
            this.text = text;
            $rootScope.$broadcast('broadcastText');
        };

        service.getWithPromise = function () {
            var deferred = $q.defer();

            $resource('/api/test', {})
                .get({},
                function (data) {
                    //success
                    deferred.resolve(data);
                },
                function (response) {
                    //error
                    deferred.reject(response);
                });

            return deferred.promise;
        };

        return service;
    }];

    //returns the services
    return angular.module(globals.appName + '.services', ['ngResource'])
        .factory('exampleService', exampleService)
        .value('version', '0.1');
});
