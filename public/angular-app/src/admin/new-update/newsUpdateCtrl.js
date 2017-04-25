angular.module('look4me').controller('newsUpdateCtrl', newsUpdateCtrl);

function newsUpdateCtrl($route, $routeParams, $window, AdminDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    var id = $routeParams.newsId;
    vm.isSubmitted = false;
    AdminDataFactory.newsDisplay(id).then(function(response) {
        console.log(response.data);
        vm.new = response.data;
    });



    vm.updateNews = function() {

        var token = jwtHelper.decodeToken($window.sessionStorage.token);

        var postData = {
            date1 : vm.new.date1,
            date2 : vm.new.date2,
            titre : vm.new.titre,
            description : vm.new.description,
            image : vm.new.image
        };
        if (vm.newsForm.$valid) {
            AdminDataFactory.updateNews(id, postData).then(function(response) {
                if (response.status === 204) {
                    $route.reload();
                }
            }).catch(function(error) {
                console.log(error);
            });
        } else {
            vm.isSubmitted = true;
        }
    };
}