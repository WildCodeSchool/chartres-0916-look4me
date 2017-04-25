(function(){
	var app = angular.module('aboutapp', []);



app.controller("aboutmeController", function ($scope) {
    $scope.msg = "À propos";

});
/*app.directive('aboutmeController',function(){
    return{
      restrict : 'A',
      name : 'aboutmeController',
      templateUrl : 'aboutme.html'
    }
  });*/


var Apropos = {
	img : 'img/natacha_portrait.JPG',
	titre : 'Natacha TILMANT',
	paragraphe : "Au cours de ma vie professionnelle,j'ai toujours été en contact avec des personnes. J'ai été amenée à diriger, à recruter certaines, et à en conseiller d'autres.J'ai vite pris conscience que l'image que l'on véhicule est aussi importante que ce que l'on est amené à dire. Comme le dit Nicholas Boothman : Tout se joue en moins de 2 minutes! Souvent par manque de temps, votre interlocuteur risque de vous juger sur votre apparence, votre attitude au détriment de vos paroles, de votre potentiel et de votre vraie nature. Une attitude peu sûre vous conduira certainement à une déception. Je vais donc vous accompagner, vous aider à vous révéler et à prendre confiance en vous, pour trouver l'harmonie entre votre personnalité et l'image que vous souhaitez véhiculer."
};

// lien button me contater vers page contact
app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
    //appel lien autre dans test
    .when('/contact',{
    templateUrl : "partials/commun/contact.html",
    controller : "contactController"
    });

}]);

})();