
// window.onload = function() {
// var elem = document.getElementById("CatalogForm");
//     elem.parentNode.removeChild(elem);
// };
var app = angular.module("dynamicFieldsPlugin", []);

app.controller("dynamicFields", function($scope) {
 
  $scope.textbox = [{id: 'choice1', name: 'choice1', label:'Company Name'}];
  $scope.boxes = [{id: 'box1', name: 'box1'}, {id: 'box2', name: 'box2'}, {id: 'box3', name: 'box3'}];
 // $scope.options = [{label:"option1",value:"1"},{label:"option2",value:"2"},{label:"option3",value:"3"}];
  $scope.dropdown_Child = [{label:"John",value:"1"},{label:"Smith",value:"2"},{label:"Brad",value:"3"}];
  $scope.Funding_Type = [{label:"ASO",value:"VALID_0eea0611-7d1e-4398-9ff0-a1d41d53010b_ASO"},{label:'Fully Inssured', value:'VALID_8fb64d8b-f0a6-474f-a074-3125e4115d21_Fully Insured'}];
  $scope.Funding_Type_Label = "Funding Type";

  $scope.addNewChoice = function() {
    var newItemNo = $scope.textbox.length+1;
    $scope.textbox.push({'id' : 'choice' + newItemNo, 'name' : 'choice' + newItemNo});
  };
 
  $scope.removeNewChoice = function() {
    var newItemNo = $scope.textbox.length-1;
    if ( newItemNo >= 0 ) {
     $scope.textbox.pop();
    }
  };
 
  $scope.showAddChoice = function(choice) {
    return choice.id === $scope.textbox[$scope.textbox.length-1].id;
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
    if ( newItemNo >= 0 ) {
     $scope.boxes.pop();
    }
  };

   
 
});