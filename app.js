(function () {
  "use strict";

  angular.module('productListing', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/customer.html',
        controller: 'CustomerController as custCtrl'
      })
      .when('/customer', {
        templateUrl: 'views/customer.html',
        controller: 'CustomerController as custCtrl'
      })
      .when('/administrative', {
        templateUrl: 'views/administrative.html',
        controller: 'AdministrativeController as adminCtrl'
      })
      .when('/addNew', {
        templateUrl: 'views/addNew.html',
        controller: 'AdditionController as addCtrl'
      })
      .otherwise({
        redirectTo: 'views/404.html'
      });
  });



})();
