angular.module("look4me").controller('galleryUpdateCtrl', galleryUpdateCtrl);


function galleryUpdateCtrl(AdminDataFactory,$route, $routeParams, $window, AuthFactory, jwtHelper){
    var vm = this;
    var id = $routeParams.galleryId;

    AdminDataFactory.galleryDisplay(id).then(function(response) {
        vm.atelier = response.data;
        vm.numeroAtelier = ad.conseil.numeroAtelier;
        vm.titreAtelier = ad.conseil.titreAtelier;
        vm.titreDetail = ad.conseil.titreDetail;
        vm.detailAtelier = ad.conseil.detailAtelier;
    });
}