require.config({
    baseUrl: '/js'
});

require( [
    'app'
], function(app) {
    'use strict';
    angular.bootstrap(document, [app['name']]);
});