define([], function() {
    'use strict';

    /* Object holding some global variables */
    return {
        appName: 'templateApp',
        interpolateProvider: {
            startSymbol: '{{',
            endSymbol: '}}'
        }
    };
});