(function () {
var app = angular.module('editProfileApp', []);   
    app.controller('myCtrl', function($scope) {
        
        
        $scope.email= "Someone@something.com";
        $scope.age= "22";
        $scope.sex="male";
        $scope.school= "Florida Atlantic University";    
        
        $scope.saveEmail=function()
        {
            
        }
        $scope.saveAge=function()
        {
            
        }
        $scope.saveSchool=function()
        {
            
        }
    });

})();