angular.module("look4me").controller("serviceUpdateCtrl", serviceUpdateCtrl);

function serviceUpdateCtrl($route, $location,$routeParams, $window, AdminDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    var id = $routeParams.serviceId;
    vm.isSubmitted = false;
    vm.checkedTypePro = false;
    vm.checkedTypePart = false;
    vm.checkedGenreF = false;
    vm.checkedGenreH = false;
    AdminDataFactory.servicesDisplay(id).then(function(response) {
        vm.service = response.data;
        if(vm.service.type === 'pro'){
            vm.checkedTypePro = true;
        } else {
            vm.checkedTypePart = true;
        }
        if(vm.service.genre === 'F'){
            vm.checkedGenreF = true;
        } else {
            vm.checkedGenreH = true;
        }
    });

    vm.isLoggedIn = function() {
        if (AuthFactory.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    };

    vm.editServices = function() {


        var postData = {
            titre : vm.service.titre,
            description : vm.service.description,
            genre : vm.service.genre,
            type : vm.service.type,
            tarif : vm.service.tarif,
            img : vm.service.img
        };
        if (vm.serviceForm.$valid) {
            AdminDataFactory.updateServices(id, postData).then(function(response) {
                if (response.status === 204) {
                    $location.path("/admin/services")
                }
            }).catch(function(error) {
                console.log(error);
            });
        } else {
            vm.isSubmitted = true;
        }
    };
}