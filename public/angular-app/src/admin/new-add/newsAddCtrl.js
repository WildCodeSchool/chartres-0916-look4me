
angular.module('look4me').controller('newsAddCtrl', newsAddCtrl);

function newsAddCtrl($route, $routeParams,$location, $window, AdminDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    vm.isSubmitted = false;

    vm.isLoggedIn = function() {
        if (AuthFactory.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    };

    vm.addNews = function() {

        var postData = {
            date : vm.date,
            date2 : vm.date2,
            titre : vm.titre,
            description : vm.description,
            image : vm.image
        };
        console.log(postData);
        if (vm.newsForm.$valid) {
            AdminDataFactory.postNews(postData).then(function(response) {
                if (response.status === 201) {
                    $location.path('/admin/news');
                }
            }).catch(function(error) {
                console.log(error);
            });
        } else {
            vm.isSubmitted = true;
        }
    };
}