(function () {
  "use strict";
  angular.module('productListing').factory('ProductsService', function ($location) {
      var products = [
        {
          name: "Basic Toaster",
          image: "http://kitchen-electronics.weebly.com/uploads/2/7/1/1/27118291/6608936_orig.jpg",
          price: "$1,000,000",
          description: "This toaster is pretty good at toasting.",
          availability: "In-Stock"
        },
        {
          name: "Advanced Toaster",
          image: "http://st.houzz.com/simgs/7dd1de47010717b1_4-2319/contemporary-toasters.jpg",
          price: "$5,000,000",
          description: "Toasts all the toast.",
          availability: "In-Stock"
        },
        {
          name: "Toaster - Dark Side Edition",
          image: "http://www.ohgizmo.com/wp-content/uploads/2008/11/dv-toaster.jpg",
          price: "$10,000,000",
          description: "May the toast be with you.",
          availability: "Back-Ordered"
        },
        {
          name: "Sunbeam Toaster",
          image: "http://img3.wikia.nocookie.net/__cb20120719202236/disney/images/8/8f/Toaster.jpg",
          price: "priceless",
          description: "Brave little toaster.",
          availability: "Out-Of-Stock"
        }
      ];

      var getProducts = function () {
        return products;
      };
      var addProduct = function (product) {
        products.push(product);
        $location.path("/");
      };
      var deleteProduct = function (index) {
        products.splice(index,1);
      };
      return {
        getProducts: getProducts,
        addProduct: addProduct,
        deleteProduct: deleteProduct
      };
    });

})();
