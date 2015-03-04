(function () {
  "use strict";

  angular.module('ngProductListing', [
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/products.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/detail/:productIndex', {
        templateUrl: 'views/detail.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/addNew', {
        templateUrl: 'views/addNew.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartController as cartCtrl'
      })
      .otherwise({
        redirectTo: 'views/404.html'
      });
  })

  .constant('_', _);

})();
