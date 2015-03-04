(function () {
  "use strict";
  angular.module('ngProductListing')

    .factory('ProductsService', function ($location,$http) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/ngngng';

      var products = [
        {
          name: "Basic Toaster",
          image: "http://kitchen-electronics.weebly.com/uploads/2/7/1/1/27118291/6608936_orig.jpg",
          price: 1,
          description: "This toaster is pretty good at toasting.",
        },
        {
          name: "Advanced Toaster",
          image: "http://st.houzz.com/simgs/7dd1de47010717b1_4-2319/contemporary-toasters.jpg",
          price: 20,
          description: "Toasts all the toast.",
        },
        {
          name: "Dark Side Toaster",
          image: "http://www.ohgizmo.com/wp-content/uploads/2008/11/dv-toaster.jpg",
          price: 35,
          description: "May the toast be with you.",
        },
        {
          name: "Sunbeam Toaster",
          image: "http://img3.wikia.nocookie.net/__cb20120719202236/disney/images/8/8f/Toaster.jpg",
          price: 500,
          description: "Brave little toaster.",
        }
      ];

      var getProducts = function () {
        return $http.get(url);

        //ASK CALVIN ABOUT RETURNING PROMISE INSTEAD OF EXPECTED DATA
        // .success(function(data){
        //   return data;
        // })
        // .error(function(){
        //   console.log('service/getProducts error');
        // });
        // return products;
      };

      var addProduct = function (product) {
        $http.post(url, product).success(function(){
          $location.path("/");
        })
        .error(function(){
          console.log('service/addProduct error');
        });
      };

      var deleteProduct = function (passedId) {
        $http.delete(url + '/' + passedId).success(function(){

        })
        .error(function(){
          console.log('service/deleteProduct error');
        });
      };

      var editProduct = function (editedProduct) {
        $http.put(url + '/' + editedProduct._id, editedProduct);
      };

      var getOneProduct = function (index) {
        return products[index];
      };

      return {
        getProducts: getProducts,
        addProduct: addProduct,
        deleteProduct: deleteProduct,
        editProduct: editProduct,
        getOneProduct: getOneProduct
      };

    })

    .factory('CartService', function ($location,_) {

      var cart = [];

      var getCart = function () {
        return cart;
      };

      var getCartTotal = function () {
        var runningTotal = 0;
        _.map(cart,function(eachObject){
          runningTotal = runningTotal + (eachObject.quantity*eachObject.price);
        });
        return runningTotal;
      };

      var addToCart = function (product) {
        var foo = false;
        if(cart.length === 0){
          product.quantity = 1;
          cart.push(product);
        }else{
          for(var i=0;i<cart.length;i++){
            if(product.name === cart[i].name){
              product.quantity = product.quantity + 1;
            }else if(i === cart.length -1){
              product.quantity = 0;
              cart.push(product);
            }
          }
        }
      };

      var deleteFromCart = function (index) {
        cart.splice(index,1);
      };

      var plusQuantity = function (passedItem) {
        passedItem.quantity = passedItem.quantity + 1;
      };

      var minusQuantity = function (passedItem) {
        if(passedItem.quantity > 1){
          passedItem.quantity = passedItem.quantity - 1;
        }

      };

      var getCartCount = function () {
        var cartQuantity = 0;
        _.each(cart,function (eachProduct) {
          cartQuantity = cartQuantity + eachProduct.quantity;
        });
        return cartQuantity;
      };

      return {
        getCart: getCart,
        getCartTotal: getCartTotal,
        addToCart: addToCart,
        deleteFromCart: deleteFromCart,
        plusQuantity: plusQuantity,
        minusQuantity: minusQuantity,
        getCartCount: getCartCount
      };

    })

    .factory('CommentsService', function ($location,_,$http) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/ngngngComments';

      var getComments = function () {
        return $http.get(url);
      };

      var postComment = function (passedComment) {
        $http.post(url, passedComment).success(function(){
        })
        .error(function(){
          console.log('service/addProduct error');
        });
      };

      return {
        getComments: getComments,
        postComment: postComment

      };

    });
})();
