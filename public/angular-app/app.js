(function(){

  var app = angular.module('look4me', ['ngRoute','ngSanitize','angular-jwt','ngFileUpload',"angularTrix"]);

  app.run(function($anchorScroll,$rootScope, $location, $window, AuthFactory) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
});

  app.controller('headerCheck', ['$scope','$location', function($scope, $location){
    $scope.headerhome = 1;
    var tabPath = new Array();
    $scope.$watch(function(){
      return $location.path();
    }, function(newPath){
      tabPath = newPath.split('/');
      if(tabPath[1] === ''){
        $scope.headerhome = 1;
      }
      else{
        $scope.headerhome = 0;
      }
    });
  }]);

  app.config(function($routeProvider, $httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
    $routeProvider

    .when('/',{
      templateUrl : 'angular-app/partials/home.html',
      controller : 'HomeController'
    })
    .when('/home',{
      templateUrl : 'angular-app/partials/home.html',
      controller : 'HomeController'
    })
    .when('/particuliers',{
      templateUrl : 'angular-app/partials/particuliers.html',
      controller : 'particuliersController'
    })
    .when('/entreprises',{
      templateUrl : 'angular-app/partials/entreprises.html',
      controller : 'entreprisesController'
    })
    .when('/portfolio',{
      templateUrl : 'angular-app/partials/portfolio.html',
      controller : 'PortfolioController'
    })
    .when('/presentation',{
      templateUrl : 'angular-app/partials/aboutme.html',
      controller : 'aboutmeController'
    })
    .when('/contact',{
      templateUrl : 'angular-app/partials/contact.html',
      controller : 'contactController'
    })
    .when('/news',{
      templateUrl : 'angular-app/partials/news.html',
      controller : 'NewsController'
    })
    .when('/plusdinfos',{
      templateUrl : 'angular-app/partials/plusdinfos.html',
      controller : 'plusdinfosController'
    })
    .when('/legacy',{
      templateUrl : 'angular-app/partials/legacy.html'
    })
    .when('/admin',{
      templateUrl : 'angular-app/partials/admin.html',
      access: {
        restricted : false
      }
    })
    .when('/admin/news', {
      templateUrl : 'angular-app/src/admin/new-list/new.html',
      controller : 'newsCtrl',
      controllerAs : 'vm',
      access: {
        restricted: true
      }
    })
    .when('/admin/news/add', {
      templateUrl : 'angular-app/src/admin/new-add/news.html',
      controller : 'newsAddCtrl',
      controllerAs : 'vm',
      access: {
        restricted: true
      }
    })
    .when('/admin/news/update/:newsId', {
      templateUrl : 'angular-app/src/admin/new-update/news.html',
      controller : 'newsUpdateCtrl',
      controllerAs : 'vm',
      access: {
        restricted: true
      }
    })
    .when('/admin/gallery', {
      templateUrl : 'angular-app/src/admin/gallery-list/gallery.html',
      controller : 'galleryCtrl',
      controllerAs : 'vm',
      access: {
        restricted: true
      }
    })
    .when('/admin/gallery/add', {
      templateUrl : 'angular-app/src/admin/gallery-add/gallery.html',
      controller : 'galleryAddCtrl',
      controllerAs : 'vm',
      access: {
        restricted: true
      }
    })
    .when('/admin/services', {
      templateUrl : 'angular-app/src/admin/service-list/service.html',
      controller : 'serviceCtrl',
      controllerAs : 'vm',
      access: {
        restricted: true
      }
    })
    .when('/admin/services/add', {
      templateUrl : 'angular-app/src/admin/service-add/service.html',
      controller : 'serviceAddCtrl',
      controllerAs : 'vm',
      access: {
        restricted: true
      }
    })
    .when('/admin/services/update/:serviceId', {
      templateUrl : 'angular-app/src/admin/service-update/service.html',
      controller : 'serviceUpdateCtrl',
      controllerAs : 'vm',
      access: {
        restricted: true
      }
    })
    .otherwise({
      redirectTo : '/'
    });
  });

  /***********controller**********************/
  app.controller('LookController', function(){
    this.product = look;
  });


  /************************************PLUS DINFO**********************/
  app.controller('plusdinfosController', function($scope){
  $scope.plus.objectPlusinfos = [
  { titleinfo: "2016",
  pdfinfo: "img/pdf/pdf-fashion.pdf",
  videoinfo: "http...",
  descriptioninfo: "Fashion Week printemps-été 2017 : suivez le défilé Emporio Armani en direct à 21 heures"
  },
  { titleinfo: "2017",
  pdfinfo: "img/pdf/pdf-fashion.pdf",
  videoinfo: "http...",
  descriptioninfo: "Fashion Week printemps-été 2017 : suivez le défilé Emporio Armani en direct à 21 heures"
  },
  { titleinfo: "2018",
  pdfinfo: "img/pdf/pdf-fashion.pdf",
  videoinfo: "http...",
  descriptioninfo: "Fashion Week printemps-été 2017 : suivez le défilé Emporio Armani en direct à 21 heures",
  }

];

});
  /*************************************PLUS DINFO**********************/

  app.controller('HomeController', function($scope,AdminDataFactory){
    $scope.home = {};
    $scope.home.caption = {
      title : "Avant / Après",
      paragh : "Retrouvez prochainement d'autres relooking sur ma page facebook"
    };
    $scope.home.space = {
      title : "Bienvenue",
      photo : "img/interieur_4250.JPG",
      paragh : "Dans une atmosphère bienveillante, d'écoute et de respect je vous aide  à reprendre confiance en vous, affirmer votre personnalité et trouver l'harmonie avec l'image que vous souhaitez vehiculer."
    };

    AdminDataFactory.galleryList().then(function(response){

    });
    $scope.home.portfolio = [

    {img:["marc1.jpg", "marc2.jpg"], alt: "Photo relooking"},
    {img:["fille1.jpg", "fille2.jpg"], alt: "Photo relooking"},
    {img:["marine1.jpg", "marine2.jpg"], alt: "Photo relooking"}
    ];

  });

  /******************************************** News controller *****************************************/
  app.controller('NewsController', function($scope){

  $scope.news = {};
  $scope.news.objectNews1 = [

{ datej: "Bientôt",
  dateM: "Les fêtes",
  title: "Pensez aux Bons cadeaux",
  description: "Pour un cadeau original et qui fera toujours plaisir. Cours de maquillage, test de colorimétrie,",
  image: "img/news-presse/cadeaux.jpg"
}

];

 $scope.news.objectNews2 = [
{ datej: "En",
  dateM: "Février",
  title: "Semaine santé, beauté  ",
  description: "Retrouvez-moi en Février...lors de semaine santé, beauté à l'hypermarché de Fontenay sur Eure",
  image: "img/news-presse/news.png"
}

];

 $scope.news.objectNews3 = [
{ datej: "Tendances",
  dateM: "",
  title: "Couleurs pour cet hiver",
  description: "Retrouvez-moi en Février...lors de semaine santé, beauté à l'hypermarché de Fontenay sur Eure",
  image: "img/news-presse/tendances.jpg"
}

];

$scope.news.objectPresses = [
{
  info: ["Relooking avec Look4me: parution Décembre. Dans le centre de Chartres nous avons eu la chance d'avoir des conseils pour nous mettre en valeur pour les fêtes...", "voici ma vidéo pour le maquillage classique spécial débutant. un maquillage qui passe partout et qui va aussi bien aux yeux verts, bleus ou marrons",],
  photo: ["img/news-presse/img-presse.jpg", "img/news-presse/img-presse2.png", "img/news-presse/img-presse3.png"],
  pdf: ["https://www.youtube.com/watch?v=CqU9K8HQ3W4", "http://www.relooking-chartres.fr/"],
  title: "2017",
  plusinfos: "plus d'infos"
}

];

});
  /********************************** News end controller ***************************************/

  /********************************** particuliers controller ***************************************/

  app.controller('particuliersController', function($scope,$location,$anchorScroll){

    $scope.tab = 1;

    $scope.changeTab = function(id){
      $scope.tab = parseInt(id);
    };

    $scope.$watch(function(){
      return $scope.tab;
    },function(newtab){
      console.log(newtab);
      var newHash = 'menu' + newtab;
      $location.hash(newHash);
      $anchorScroll(newHash);
      $location.hash('');
    });

    $scope.goToHash = function(id){
      /*let newHash = 'menu' + id;
      $location.hash(newHash);
      $anchorScroll();
      $location.hash('');*/
      $scope.tab = parseInt(id);
    };

    $scope.offreCadeau = {
      titre:"OFFRE SPECIAL NOEL",
      texte:"Bientôt les fêtes"
    };

    $scope.servParticuliersF = [

      // Prestation 1 (femmes)
      {
        img:"img/particuliers/femmes/entretienDecouverteFemme.jpg",
        alt:"photo meeting",
        titre:"Entretien découverte",
        description:"Nous permet de définir votre objectif et adapter la formule à vos besoins",
        tarif:"1H - 50€",
        genre:"F"
      },
      // Prestation 2 (femmes)
      {
        img:"img/particuliers/femmes/colorimetrie.jpg",
        alt:"photo atelier colorimetrie",
        titre:"Atelier colorimétrie",
        description:"Les couleurs ont un impact sur votre visage. Elles peuvent vous effacer ou vous mettre en valeur. Ce test est un incontournable du coaching en image car son résultat nous servira dans le choix de votre maquillage, coloration coiffure, de vos tenues et accessoires. Vous comprendrez la symbolique des couleurs et comment les utiliser selon vos objectifs. Un nuancier correspondant à votre résultat vous sera remis en fin de séance. Il vous sera utile lors de vos achats vestimentaires!",
        tarif:"1H - 70€",
        genre:"F"
      },
      // Prestation 3 (femmes)
      {
        img:"img/particuliers/femmes/atelier_makeup.jpg",
        alt:"photo make-up",
        titre:"Atelier make-up",
        description:"Se maquiller peut être un plaisir pour certaines personnes et une perte de temps pour d'autres. Pourtant, avec des conseils personnalisés et faciles à reproduire, nous pouvons toutes réaliser un maquillage idéal en toutes circonstances.        Cet atelier comprend : <ul>                              <li>analyse du type de peau et conseil soins du visage</li>                <li>cours de maquillage</li>                <li>tri de votre trousse de maquillage</li>              </ul>",
        tarif:"1H30 - 90€",
        genre:"F"
      },
      // Prestation 4 (femmes)
      {
        img:"img/particuliers/femmes/relookingCoiffureFemme.jpg",
        alt:"photo relooking coiffure",
        titre:"Relooking coiffure",
        description:"Après avoir vu ensemble : <ul>                 <li>votre personnalité</li>                 <li>la morphologie de votre visage</li>                 <li>test de colorimétrie</li>                <li>votre nature de cheveux</li>                <li>vos contraintes et envies</li>              </ul> Je vous accompagne chez notre partenaire coiffeur où nous vous révélerons la coupe et les choix de coloration qui vous mettront en valeur.              </ul><br><br>               Non-compris :               <ul>                <li>(!) La prestation de notre partenaire coiffeur</li>",
        tarif:"min 4h - 240€",
        genre:"F"
      },
      // Prestation 5 (femmes)
      {
        img:"img/particuliers/femmes/relooking_vestimentaire.jpg",
        alt:"photo relooking vestimentaire",
        titre:"Relooking vestimentaire",
        description:"Chacun étoffe sa garde-robe de différentes façons. Certaines personnes sont douées pour trouver ce qui leur va, d'autres se laisseront influencer par la mode ou un vendeur plus préoccupé par la vente que par le rendu du vêtement sur eux. <br> Savoir s'habiller en toute occasion et suivant l'objectif de style que vous vous êtes fixé, voila ce que je vous aide à acquérir.              Ce relooking comprend : <ul>                 <li>test des couleurs</li>                <li>analyse morphologique de votre silhouette</li>                <li>identification de votre style</li>                <li>conseils vestimentaires et accessoires</li>                 <li>accompagnement shopping</li>              </ul>",
        tarif:"7H - 420€",
        genre:"F"
      },
      // Prestation 6 (femmes)
      {
        img:"img/particuliers/femmes/coachingImageComplet.jpg",
        alt:"photo coaching en image",
        titre:"Coaching en image complet",
        description:"Ce coaching comprend : <ul>                <li>entretien découverte</li>                 <li>test des couleurs</li>                <li>analyse morphologique du visage, cosmétologie et cours de maquillage</li>                 <li>conseils coiffure et accompagnement chez notre partenaire coiffeur</li>                <li>analyse morphologique de la silhouette</li>                 <li>conseils vestimentaires (coupes, couleurs, motifs et imprimés) et accessoires</li>                <li>tri de votre garde-robes</li>                 <li>accompagnement shopping</li>                         </ul>               Non-compris :               <ul>                <li>(!) La prestation de notre partenaire coiffeur</li>                 <li>(!) Les achats en boutique</li>              </ul>",
        tarif:"10-11H - 600€",
        genre:"F"
      },
      // Prestation 7 (femmes)
      {
        img:"img/particuliers/femmes/atelierAmiesFamille.jpg",
        alt:"photo atelier occasion",
        titre:"Séances entre amies ou en familles",
        description:"Pour un après-midi entre amies, enterrement de vie de jeune fille, les thématiques suivantes peuvent s'adapter selon vos envies : <ul>                <li>séance colorimetrie</li>                 <li>séance morpho-style</li>                <li>séance maquillage</li> ",
        tarif:"5 personnes maximum, à partir de 45€/ pers",
        genre:"F"
      }
      ];

      $scope.servParticuliersH = [
      // Prestation 1 (hommes)
      {
        img:"img/particuliers/hommes/entretienDecouverteHomme.jpg",
        alt:"photo meeting",
        titre:"Entretien découverte",
        description:"Nous permet de définir votre objectif et adapter la formule à vos besoins",
        tarif:"1H - 50€",
        genre:"H"
      },
      // Prestation 2 (hommes)
      {
        img:"img/particuliers/hommes/colorimetrie.jpg",
        alt:"photo colorimetrie",
        titre:"Atelier colorimétrie",
        description:"Les couleurs ont un impact sur votre visage. Elles peuvent vous effacer ou vous mettre en valeur. Ce test est un incontournable du coaching en image car son résultat nous servira dans le choix de vos tenues et accessoires. Vous comprendrez la symbolique des couleurs et comment les utiliser selon vos objectifs. Un nuancier correspondant à votre résultat vous sera remis en fin de séance. Il vous sera utile lors de vos achats vestimentaires!",
        tarif:"1H - 70€",
        genre:"H"
      },
      // Prestation 3 (hommes)
      {
        img:"img/particuliers/hommes/relookingCoiffureHomme.jpg",
        alt:"photo relooking barbe",
        titre:"Relooking visage",
        description:"Apres avoir discuté de votre objectif et conseiller sur les soins à apporter à votre peau, je vous indique la coupe la mieux adaptée à votre morphologie du visage et vous  accompagne chez notre partenaire coiffeur qui realisera la coupe et soins de barbe si nécessaire. <br/>Non-compris :               <ul>                <li>(!) La prestation de notre partenaire coiffeur</li>              </ul>",
        tarif:"2H - 120€",
        genre:"H"
      },
      // Prestation 4 (hommes)
      {
        img:"img/particuliers/hommes/relookingComplet.jpg",
        alt:"photo coaching en image",
        titre:"Coaching en image complet",
        description:"Comprend : <ul>                <li>entretien découverte</li>                 <li>test des couleurs</li>                <li>analyse morphologique du visage et cosmétologie</li>                 <li>conseils coiffure et accompagnement chez notre partenaire coiffeur</li>                <li>analyse morphologique de la silhouette</li>                 <li>conseils vestimentaires (coupes, couleurs, motifs et imprimés) et accessoires</li>                 <li>accompagnement shopping</li>              </ul>               Non-compris :               <ul>               <li>(!) La prestation de notre partenaire coiffeur</li>  <li>(!) Les achats en boutique</li>              </ul>",
        tarif:"8H - 480€",
        genre:"H"
      }
      ];
    });


/********************************** end particuliers controller ***************************************/

/********************************** Entreprise controller ***************************************/
app.controller('entreprisesController', function($scope){
  $scope.servEntreprises = [

      // Prestation 1
      {
        titre:"Offres pour les CE",
        description:"Etoffer le catalogue de votre comité d'entreprise par des prestations de relooking et des bons cadeaux."
      },
      // Prestation 2
      {
        titre:"Actions Commerciales",
        description:"Je vous propose d'organiser des évènements en boutique en relation avec votre activité :<ul>                <li>atelier colorimétrie</li>                <li>atelier morpho-silhouette</li>                <li>atelier maquillage</li>                </ul> L'objectif est d'animer la boutique, valoriser votre image de marque et capter une nouvelle clientèle."
      },
      // Prestation 3
      {
        titre:"Challenge Commercial",
        description:"Fixer des objectifs à vos commerciaux et faites leur gagner :<ul>                <li>un atelier de maquillage</li>                 <li>un coaching d'image complet</li>                <li>un atelier colorimétrie</li>                </ul>"
      },
      // Prestation 4
      {
        titre:"Valoriser l'image et la communication de vos collaborateurs",
        description:"Vos collaborateurs représentent votre entreprise , ils sont votre 'carte de visite'. Des recherches ont révélé que l'impact de notre communication repose sur :<ul>                <li>7% le verbal (les propos utilisés)</li>                 <li>38 % le vocal (l'intonation , le rythme de la voix)</li>                <li>55 % l'apparence (gestuelle, attitude, look vestimentaire )</li>                </ul> Dans un marché économique complexe, il est donc important de vérifier que vos collaborateurs véhiculent la bonne image de votre entreprise en valorisant leur apparence ! Après avoir défini avec vous l'image que vous souhaitez véhiculer de votre entreprise, je m'attache à transmettre à vos collaborateurs :<ul>                <li>le dress code (style , symbolique des couleurs )</li>                 <li>la gestuelle</li>                <li>l'attitude correspondant à vos attentes</li>                </ul> Cela permet à vos collaborateurs de gagner en confiance en soi, en crédibilité et de trouver ou (retrouver) une motivation dans leur travail. Des collaborateurs qui se sentent bien auront forcement un impact sur le developpement de votre activité et vous démarquera de la concurrence."
      }
      ];
    });
/********************************** about controller ***************************************/
app.controller("aboutmeController", function ($scope) {
  $scope.about = {
    title : "Natacha Tilmant",
    paragh : "Au cours de ma vie professionnelle, j'ai toujours été en contact avec des personnes.<br/>J'ai été amenée à diriger, à recruter certaines, et à en conseiller d'autres. <br/> J'ai vite pris conscience que l'image que l'on véhicule est aussi importante que ce que l'on est amené à dire. <br/>Comme le dit Nicholas Boothman<em> <br/>\"Tout se joue en moins de 2 minutes!\"</em><br/>Souvent par manque de temps, votre interlocuteur risque de vous juger sur votre apparence, votre attitude au détriment de vos paroles, de votre potentiel et de votre vraie nature. <br/>Une attitude peu sûre vous conduira certainement à une déception.<br/>Nombres de personnes suite à un échec professionnel ou personnel perdent confiance en eux et l'image qu'ils ont d'eux-mêmes.<br/>Je vais vous accompagner, vous aider à vous révéler et à prendre confiance en vous, pour trouver l'harmonie entre votre personnalité et l'image que vous souhaitez véhiculer. <br/><br/> Diplômée de L' IDRI(Institut de Relooking International Paris)<br/>L'IDRI  délivre une  Certification Officielle reconnue par le Ministère de l' Education Nationale.",
    photo : 'img/natacha_portrait.JPG'
  }
});

app.controller("contactController", function ($scope,$location) {

  $scope.user = {};
  $scope.message = '';
  $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      console.log("ici");
      postData = {
        name : $scope.users.name + this.user.username,
        email : $scope.user.email,
        message : $scope.user.message,
        subject : $scope.user.choice
      };
      $location.path("/");
      $http.post("/api/email",postData).then(function(response){
        $scope.message = response;
        $location.path("/");
      }).catch(function(error){
        $scope.message = error;
        $location.path("/");
      });

    }

  };


  $scope.coordonnees = {
    identite :"LOOK4ME",
    name: "Natacha Tilmant",
    adresse: "7 Rue de la Foulerie",
    ville: "28000 Chartres",
    telephone: "06 38 44 38 38",
    email: "natacha@look4me.fr"

  };


  $scope.listFemmes = listchoiceParticulierFemmes;
  $scope.listHommes = listchoiceParticulierHommes;
    $scope.listEntreprise = listchoiceEntreprise;


  $scope.showParticulier = false;
  $scope.showEntreprise = false;
    $scope.myFunc = function() {
        $scope.showParticulier = !$scope.showParticulier;
        $scope.showEntreprise = false;
    };
    $scope.myFunc2 = function() {
        $scope.showEntreprise = !$scope.showEntreprise;
        $scope.showParticulier = false;
    };


});


var listchoiceParticulierFemmes = ["Entretien Découverte","Atelier colorimétrie","Atelier make-up","Relooking coiffure","Relooking vestimentaire","Coaching en image complet","Atelier occasion"];
var listchoiceParticulierHommes = ["Ateliers découvertes","Ateliers colorimétrie","Relooking visage","Relooking coiffure","Coaching en image complet"];
var listchoiceEntreprise = ["Offres pour les CE","Actions Commerciales","Challenge Commercial","Valorisation de l'image et communication de vos collaborateurs"];



/***************************************** controller portfolio *****************************/

app.controller("PortfolioController", function($scope){

    // Data object
    $scope.portfolio = {};
    $scope.portfolio.images = [
        {imgAV: "marc1.jpg", imgAP: "marc2.jpg", alt: "Photo relooking style"},
        {imgAV: "fille1.jpg", imgAP: "fille2.jpg", alt: "Photo total relooking"},
        {imgAV: "marine1.jpg", imgAP: "marine2.jpg", alt: "Photo relooking maquillage"}
    ];
    $scope.portfolio.testimonials = [
        /*{
        title:"Marjorie (35 ans) - Relooking style",
        description: "<em><strong>Donec id elit</strong> non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</em>"
        }, {
        title:"Enzo (44 ans) - Relooking global",
        description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
        }, {
        title:"Alice (21 ans) - Relooking maquillage",
        description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
        }, {
        title:"Groupe Guerlain - Coaching d'entreprise",
        description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
        }*/
    ];
});

/******************* controller portfolio **************************************************/

/*********************Directive*************************************************************/

app.directive('headernav', function() {
  return{
   restrict: 'E',
   name: 'headernav',
   templateUrl: 'angular-app/partials/commun/headernav.html'
 }
});
app.directive('headerhome', function() {
  return{
    restrict: 'E',
    name: 'headernav',
    templateUrl: 'angular-app/partials/commun/headerhome.html'
  }
});

app.directive('footers', function(){
  return{
    restrict: 'AE',
    name: 'footers',
    templateUrl: 'angular-app/partials/commun/footers.html',

  }
});
    /*app.directive('plusdinfos', function(){
    return{
      restrict: 'E',
      name: 'plusdinfos',
      templateUrl: '/partials/plusdinfos.html',

    }
  });*/
  /************* end Directive *********************/

})();
