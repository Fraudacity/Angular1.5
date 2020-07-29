var app = angular.module('app', []);
app.controller('emp', ['$scope', function($scope){
    
    $scope.emps = [
        {empno:"101", ename:"John"},
        {empno:"102", ename:"Cena"},
        {empno:"103", ename:"Don"},
        {empno:"104", ename:"Bark"}
    ];
    $scope.addEmp = function(){
        var newEmpNo = 100 + $scope.emps.lenght + 1;
        var newName = "ename"+newEmpNo;

        $scope.emps.push({empno:newEmpNo, ename:newName})
    }

        $scope.modify3rdEmp = function(){
            $scope.emps[2].ename="Test";
        }

        $scope.$watchCollection('emps', function(newValue,oldValue){
            console.log("No of Emplyrees: "+ $scope.emps.lenght)
        },true)
    // $scope.o ={
    //     a:1,
    //     b:2,
    //     c:3
    // }
    
    // $scope.$watchGroup(['o.a','o.b'], function(newValue,oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c =$scope.o.a*$scope.o.b
    //     }
    // })
    

    // $scope.$watch("o", function(newValue,oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c =$scope.o.a*$scope.o.b
    //     }
    // },true)
    
    // $scope.a =1;
    // $scope.b =2;
    // $scope.c =3;
 
    // $scope.$watch(['a','b'],function(newValue, oldValue){
    //     if(newValue !=oldValue){
    //         $scope.b =$scope.a *4
    //     }
    // })
    // // $scope.$watch("b",function(newValue, oldValue){
    // //     if(newValue !=oldValue){
    // //         $scope.c =$scope.b *4
    // //     }
    // // })
    // // $scope.$watch("c",function(newValue, oldValue){
    // //     if(newValue !=oldValue){
    // //         console.log("Updated C to "+newValue)
    // //     }
    // // })
}])