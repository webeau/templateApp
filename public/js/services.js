define(['globals'], function (globals) {
    'use strict';

    return angular.module(globals.appName + '.services', ['ngResource'])
        .factory('exampleService', function ($rootScope, $resource, $q) {
            var service = {};
            service.text = '';

            service.broadcast = function (text) {
                this.text = text;
                $rootScope.$broadcast('broadcast');
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
        })
        .value('version', '0.1');
});
