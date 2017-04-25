angular.module('look4me').factory('AdminDataFactory', AdminDataFactory);

function AdminDataFactory($http) {
    return {
        galleryList: galleryList,
        galleryDisplay: galleryDisplay,
        postGallery: postGallery,
        updateGallery : updateGallery,
        deleteGallery : deleteGallery,
        newsList: newsList,
        newsDisplay: newsDisplay,
        newsDelete : newsDelete,
        postNews: postNews,
        updateNews : updateNews,
        servicesList: servicesList,
        servicesDisplay: servicesDisplay,
        postServices: postServices,
        updateServices : updateServices,
        servicesDelete : servicesDelete
    };

    function galleryList() {
        return $http.get('/api/galleries').then(complete).catch(failed);
    }

    function galleryDisplay(id) {
        return $http.get('/api/galleries/' + id).then(complete).catch(failed);
    }

    function postGallery(gallery) {
        return $http.post('/api/galleries/', gallery).then(complete).catch(failed);
    }
    function updateGallery(id, gallery) {
        return $http.put('/api/galleries/' + id, gallery).then(complete).catch(failed);
    }

    function deleteGallery(id) {
        return $http.delete('/api/galleries/' + id).then(complete).catch(failed);
    }

    function newsList() {
        return $http.get('/api/news').then(complete).catch(failed);
    }

    function newsDisplay(id) {
        return $http.get('/api/news/' + id).then(complete).catch(failed);
    }
    function newsDelete(id) {
        return $http.delete('/api/news/' + id).then(complete).catch(failed);
    }

    function postNews(news) {
        return $http.post('/api/news/', news).then(complete).catch(failed);
    }
    function updateNews(id, news) {
        return $http.put('/api/news/' + id, news).then(complete).catch(failed);
    }

    function servicesList() {
        return $http.get('/api/services').then(complete).catch(failed);
    }

    function servicesDisplay(id) {
        return $http.get('/api/services/' + id).then(complete).catch(failed);
    }

    function postServices(services) {
        return $http.post('/api/services/', services).then(complete).catch(failed);
    }
    function updateServices(id, services) {
        return $http.put('/api/services/' + id, services).then(complete).catch(failed);
    }
    function servicesDelete(id) {
        return $http.delete('/api/services/' + id).then(complete).catch(failed);
    }


    function complete(response) {
        return response;
    }

    function failed(error) {
        console.log(error.statusText);
    }

}