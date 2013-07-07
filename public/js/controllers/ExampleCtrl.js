define([], function() {
    return ['$scope', '$route', 'exampleService', function($scope, $route, exampleService) {

        $scope.message = 'Hello, ExampleCtrl!';
        $scope.testData = $route.current.locals.testData;
        console.log('loaded through resolve with promise, testdata:', $scope.testData);

        $scope.testData2 = exampleService.getWithPromise();
        $scope.testData2.then(
            function(data){console.log('loaded through service with promise, testData2:', data);},
            function(response){console.log('error when loading through service with promise', response);}
        );


        $scope.handleClick = function(){
            exampleService.broadcastText('[From ExampleCtrl] ' + $scope.message);
        };

        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});