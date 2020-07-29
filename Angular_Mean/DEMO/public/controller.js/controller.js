function AppCtrl($scope, $http){
    console.log("Hello World from controller")

   $http.get('/contactlist').success(function(response){
       console.log("i fot the data i requested");
       $scope.contactlist=response;
   })

}

