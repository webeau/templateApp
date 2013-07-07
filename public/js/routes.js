define(['globals'], function (globals) {
    'use strict';

    return angular.module(globals.appName + '.routes', [])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/',
                {
                    templateUrl: 'templates/mainView.html'
                });
            $routeProvider.otherwise({redirectTo: '/'});
            $locationProvider.html5Mode(true);
        });
});
