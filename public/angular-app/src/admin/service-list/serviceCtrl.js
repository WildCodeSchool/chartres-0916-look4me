angular.module("look4me").controller('serviceCtrl',serviceCtrl);

function serviceCtrl(AdminDataFactory){
    var vm = this;
    AdminDataFactory.servicesList().then(function(response){
        vm.services = response.data;
    });

    vm.deleteServices = function(id) {
        AdminDataFactory.servicesDelete(id).then(function(response){
            if (response.status === 200) {
                AdminDataFactory.servicesList().then(function(responses){
                    vm.services = responses.data;
                })
            }
        })
    }
}