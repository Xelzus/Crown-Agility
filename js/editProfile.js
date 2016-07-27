(function () {
var app = angular.module('editProfileApp', []); 
    
    app.controller('myCtrl', function($scope) {
        
        
        $scope.email= "Someone@something.com";
        $scope.age= 22;
        $scope.sex="male";
        $scope.school= "Florida Atlantic University";
        
        $scope.editEmail=true;
        $scope.editAge=true;
        $scope.editSchool=true;
        
        $scope.saveEmail=function()
        {
            $scope.editEmail=!$scope.editEmail;
        };
        
        $scope.saveAge=function()
        {
            $scope.editAge=!$scope.editAge;
        };
        
        $scope.saveSchool=function()
        {
            $scope.editSchool=!$scope.editSchool;
        };
    });

})();