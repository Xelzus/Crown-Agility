(function () {
var app = angular.module('editProfileApp', []); 
    app.controller('displayController', function($scope){
       var email=$scope.email;
        
    });
    
    app.controller('myCtrl', function($scope) {
        
        
        $scope.email= "Someone@something.com";
        $scope.age= "22";
        $scope.sex="male";
        $scope.school= "Florida Atlantic University";
        
        $scope.editEmail=true;
        $scope.editAge=true;
        $scope.editSchool=true;
        
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