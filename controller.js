(function () {
  "use strict";
  angular.module('ngProductListing').controller('MainController', function (ProductsService, CartService, $routeParams, $location) {

    var mainCtrl = this;

    ProductsService.getProducts().success(function(data){
      mainCtrl.products = data.reverse();
      
    })
    .error(function(){
      console.log('mainCtrl.products error')
    });

    mainCtrl.selectedProduct = ProductsService.getOneProduct($routeParams.productIndex);

    mainCtrl.cart = CartService.getCart();

    mainCtrl.cartCount = function () {
      return CartService.getCartCount();
    };

    mainCtrl.routeTo = function (path) {
      $location.path(path);
    };

  });
  angular.module('ngProductListing').controller('AdminController', function (ProductsService, $scope, $location) {

    var adminCtrl = this;

    ProductsService.getProducts().success(function(data){
      adminCtrl.products = data.reverse();
    })
    .error(function(){
      console.log('mainCtrl.products error')
    });

    adminCtrl.addProduct = function (newProduct) {
      ProductsService.addProduct(newProduct);
      $scope.newProduct = {};
    };

    adminCtrl.editProduct = function (editedProduct) {
      ProductsService.editProduct(editedProduct);
    };

    adminCtrl.deleteProduct = function (passedId) {
      ProductsService.deleteProduct(passedId);
    };

  });
  angular.module('ngProductListing').controller('CartController', function (CartService) {

    var cartCtrl = this;

    cartCtrl.cart = CartService.getCart();

    cartCtrl.getCartTotal = function () {
      return CartService.getCartTotal();
    };

    cartCtrl.addToCart = function (passed) {
      CartService.addToCart(passed);
    };

    cartCtrl.deleteFromCart = function (index) {
      CartService.deleteFromCart(index);
    };

    cartCtrl.plusQuantity = function (passedItem) {
      CartService.plusQuantity(passedItem);
    };

    cartCtrl.minusQuantity = function (passedItem) {
      CartService.minusQuantity(passedItem);
    };

    cartCtrl.emptyCartMsg = function () {
      if(CartService.getCart().length === 0){
        return 'is empty.';
      }
    };

  });

})();
