// 

var app = angular 
.module("myModule", [])
.controller("myController1", function($scope){
    // var person=[
    //     {firstName:"John", lastName:"Wick", city:""}, 
    //     {firstName:"John", lastName:"Wick", city:""},
    //     {firstName:"John", lastName:"Wick", city:""}
    // ];
    // $scope.persons = persons;

    var technologies = [
        {name:"Angular", likes:0, dislikes:0},
        {name:"React", likes:0, dislikes:0},
        {name:"Vue", likes:0, dislikes:0},
        {name:"Java", likes:0, dislikes:0},
        {name:"Python", likes:0, dislikes:0},
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function(technology){
        technology.likes++
    }
    $scope.incrementDisLikes = function(technology){
        technology.dislikes++
    }
})