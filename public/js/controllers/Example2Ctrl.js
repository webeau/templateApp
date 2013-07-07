define([], function() {
    return ['$scope', '$http', 'exampleService', function($scope, exampleService) {

        $scope.message = 'Hello, Example2Ctrl!';

        $scope.$on('broadcast', function () {
            $scope.message = exampleService.text;
        });

        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});