angular.module('look4me').controller('galleryAddCtrl', galleryAddCtrl);

function galleryAddCtrl(Upload,$location,$scope){
    var vm = this;
    vm.isSubmitted = false;


    vm.addGallery = function() {
        if (vm.galleryForm.$valid && vm.file1 && vm.file2) {
            vm.upload(vm.titre,vm.temoignage,vm.file1,vm.file2);
        }
    };

    vm.upload = function (titre,temoignage,file,file2) {
        Upload.upload({
            url: '/api/gallery/upload/',
            data: {file1: file, file2:file2, titre:titre, temoignage:temoignage}
        }).then(function (resp) {
            if(resp.status === 201) {
                $location.path("/admin");
            }
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        });
    };
}