
angular.module('look4me').controller('serviceAddCtrl', serviceAddCtrl);

function serviceAddCtrl($location, AdminDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    vm.isSubmitted = false;

    vm.isLoggedIn = function() {
        if (AuthFactory.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    };

    vm.addServices = function() {
        var postData = {
            titre : vm.titre,
            description : vm.description,
            genre : vm.fem_hom,
            type : vm.part_pro,
            tarif : vm.tarif,
            img : vm.img
        };
        if (vm.serviceForm.$valid) {
            AdminDataFactory.postServices(postData).then(function(response) {
                if (response.status === 201) {
                    $location.path("/admin/services");
                }
            }).catch(function(error) {
                console.log(error);
            });
        } else {
            vm.isSubmitted = true;
        }
    };
}