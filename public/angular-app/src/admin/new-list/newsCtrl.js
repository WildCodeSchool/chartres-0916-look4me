angular.module("look4me").controller('newsCtrl',newsCtrl);

function newsCtrl(AdminDataFactory){
    var vm = this;
    AdminDataFactory.newsList().then(function(response){
        vm.news = response.data;
        console.log(response.data);
    });

    vm.deleteNews = function(id) {
        AdminDataFactory.newsDelete(id).then(function(response){
            if (response.status === 200) {
                AdminDataFactory.newsList().then(function(responses){
                    vm.news = responses.data;
                })
            }
        })
    }

}