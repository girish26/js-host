
 
 var app = angular.module("dynamicFieldsPlugin", []);
 
 app.controller("dynamicFields", function($scope) {
   
   $scope.choices = [{id: 'choice1', name: 'choice1'}, {id: 'choice2', name: 'choice2'}, {id: 'choice3', name: 'choice3'}];
   $scope.boxes = [{id: 'box1', name: 'box1'}, {id: 'box2', name: 'box2'}, {id: 'box3', name: 'box3'}];
   
   $scope.addNewChoice = function() {
     var newItemNo = $scope.choices.length+1;
     $scope.choices.push({'id' : 'choice' + newItemNo, 'name' : 'choice' + newItemNo});
   };
   
   $scope.removeNewChoice = function() {
     var newItemNo = $scope.choices.length-1;
     if ( newItemNo !== 0 ) {
      $scope.choices.pop();
     }
   };
   
   $scope.showAddChoice = function(choice) {
     return choice.id === $scope.choices[$scope.choices.length-1].id;
   };
   $scope.showAddbox = function(box) {
     return box.id === $scope.boxes[$scope.boxes.length-1].id;
   };
   $scope.addNewBox = function() {
     var newItemNo = $scope.boxes.length+1;
     $scope.boxes.push({'id' : 'box' + newItemNo, 'name' : 'box' + newItemNo});
   };
   $scope.removeNewBox = function() {
     var newItemNo = $scope.boxes.length-1;
     if ( newItemNo !== 0 ) {
      $scope.boxes.pop();
     }
   };
   
 });