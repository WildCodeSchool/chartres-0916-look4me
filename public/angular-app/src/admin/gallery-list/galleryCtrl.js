angular.module("look4me").controller('galleryCtrl',galleryCtrl);

function galleryCtrl(AdminDataFactory){
    var vm = this;
    AdminDataFactory.galleryList().then(function(response){
        vm.galleries = response.data;
    });

    vm.deleteGallery = function(id) {
        AdminDataFactory.deleteGallery(id).then(function(response){
            if (response.status === 200) {
                AdminDataFactory.galleryList().then(function(responses){
                    vm.galleries = responses.data;
                })
            }
        })
    }
}