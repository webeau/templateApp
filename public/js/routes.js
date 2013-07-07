define(['globals'], function (globals) {
    'use strict';

    return angular.module(globals.appName + '.routes', [])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', //here we can add params like, :oneParam
                {
                    templateUrl: 'templates/mainView.html',
                    //controller: 'MainViewCtrl' //use when only one controller exists in the template
                    resolve: {
                        testData: function ($q, $route, exampleService) {
                            var deferred = $q.defer();
                            exampleService.getWithPromise() //here we can send in data from the routeparams or querystring, example: $route.current.pathParams.oneParam
                                .then(function(data){ deferred.resolve(data); });
                            return deferred.promise;
                        }
                    }
                });

            //all other routes redirects to /
            $routeProvider.otherwise({redirectTo: '/'});

            //in order to get nicer routes without #.. remove if old browsers are supported
            $locationProvider.html5Mode(true);
        });
});
