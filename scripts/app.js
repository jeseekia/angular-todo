angular.module("todoListApp",[])
.controller('mainCtrl',function($scope){
  $scope.helloWorld = function() {
    console.log("helloWorld controller function in the main controller");
  };


$scope.todos = [
  {"name": "finish weekly blogs"},
  {"name": "choose l.u.y.l. quest categories"},
  {"name": "grade assessments"},
  {"name": "hackathon workshop slides"},
  {"name": "schedule GDI tweets"},
  {"name": "make a timeline for moving"},
]
});
