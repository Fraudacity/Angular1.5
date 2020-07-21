//ccreate a module 

var myApp = angular.module("myModule", []);

myApp.controller('myController', function($scope){
    $scope.message ="AngularJS";
    $scope.id = 1234;
})
 
myApp.controller('myController2', function($scope){
    $scope.message ="AngularJS";
    $scope.id = 1234;
})
 

myApp.controller('myController3', function($scope){
   var employee = {
       firstName:"John",
       lastName:"Wick",
       city:"NJ",
       flag:'flag.jpg',
   }
   $scope.emp =employee;
})
 