var app = angular.module("templateFields-app", ['dynform']);

app.controller("buildTemplate", function($scope) {
 
  $scope.inputElements = [];

      $scope.formData = {};   // JavaScript needs an object to put our form's models into.
    
  $scope.formTemplate = templateFields;  
  $scope.processForm = function () {
  
      /* Handle the form submission... */
  };

  $scope.initialize = function(mainFormID) {
    var formElement = angular.element(document.querySelector('#'+ mainFormID));
    formElement.empty();
    formElement.append(document.querySelector('#templateFieldContent'));    
   
    
  }

    
 
});
