angular.module("todoListApp",[])
.controller('mainCtrl',function($scope){
  $scope.helloWorld = function(){console.log("helloWorld controller function in the main controller")};
});
