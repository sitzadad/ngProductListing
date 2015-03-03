(function () {
  "use strict";
  angular.module('productListing').controller('CustomerController', function (ProductsService, $location) {
        var custCtrl = this;

        custCtrl.products = ProductsService.getProducts();

        custCtrl.cart = ProductsService.getCart();

        custCtrl.getCartLength = ProductsService.getCartLength();

        custCtrl.addToCart = function (passed) {
          ProductsService.addToCart(passed);
        };

        custCtrl.routeTo = function (path) {
          $location.path(path);
        };

  });
  angular.module('productListing').controller('AdministrativeController', function (ProductsService, $scope, $location) {
        var adminCtrl = this;

        adminCtrl.products = ProductsService.getProducts();

        adminCtrl.editProduct = function (editedProduct) {
          ProductsService.editProduct(editedProduct);
        };

        adminCtrl.deleteProduct = function (passed) {
          ProductsService.deleteProduct(passed);
        };
        adminCtrl.routeTo = function (path) {
          $location.path(path);
        };

  });
  angular.module('productListing').controller('AdditionController', function (ProductsService, $scope, $location) {
        var addCtrl = this;

        addCtrl.products = ProductsService.getProducts();

        addCtrl.addProduct = function (newProduct) {
          ProductsService.addProduct(newProduct);
          $scope.newProduct = {};
        };
        addCtrl.routeTo = function (path) {
          $location.path(path);
        };

  });
  angular.module('productListing').controller('CartController', function (ProductsService, $scope, $location) {
        var cartCtrl = this;

        cartCtrl.cart = ProductsService.getCart();

        cartCtrl.deleteFromCart = function (index) {
          ProductsService.deleteFromCart(index);
        };

        cartCtrl.plusQuantity = function (passedItem) {
          ProductsService.plusQuantity(passedItem);
        };

        cartCtrl.minusQuantity = function (passedItem) {
          ProductsService.minusQuantity(passedItem);
        };

        cartCtrl.routeTo = function (path) {
          $location.path(path);
        };

  });

})();
