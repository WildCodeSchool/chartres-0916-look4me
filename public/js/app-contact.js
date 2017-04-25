
(function(){
// app.js
// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('contactController', function($scope) {

  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

  };

});

app.controller('userFormCtrl', function($scope){
  	$scope.useForm = {};




  app.controller('coordonneesCtrl', function($scope){
 	$scope.liste = coordonnees;


  };


  	var coordonnees = {
  		identite :"LOOK4ME",
  	name: "Natacha Tilmant",
  	adresse: "7 Rue de la Foulerie",
  	ville: "28000 Chartres",
  	telephone: "06 38 41 38 38",
  	email: "contact@look4me"
  };

});




}());

