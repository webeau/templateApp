define([], function() {
    return ['$scope', 'exampleService', function($scope, exampleService) {

        $scope.message = 'Hello, ExampleCtrl!';
        $scope.promiseTest = exampleService.getWithPromise();
        $scope.promiseTest.then(
            function(data){console.log('promiseTest.then --> success', data);},
            function(response){console.log('promiseTest.then --> error', response);}
        );

        $scope.handleClick = function(){
            exampleService.broadcast('[From ExampleCtrl] ' + $scope.message);
        };

        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});