(function(){
	var app = angular.module('store-products',[]);

	// directive for product-title
	app.directive('productDescription',  function(){
		// Runs during compile
		return {
			 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			 templateUrl: 'tabs/product-description.html'
		};
	});

	// directive for product-specification
	app.directive('productSpecification',  function(){
		// Runs during compile
		return {
			 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			 templateUrl: 'tabs/product-specification.html'
		};
	});

	// directive for product-review
	app.directive('productReview',  function(){
		// Runs during compile
		return {
			 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			 templateUrl: 'tabs/product-review.html'
		};
	});

	// directive for product-tabs
	app.directive('productTabs',  function(){
		// Runs during compile
		return {
			 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			 templateUrl: 'tabs/tabs.html'
		};
	});

	// directive for product-panels
	app.directive('productPanel',  function(){
		// Runs during compile
		return {
			 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			 templateUrl: 'tabs/product.html',
			 controller: function(){
			 	this.tab = 1;
				// selects a tab
				this.selectTab = function(setTab) {
					this.tab = setTab;
				}
				// makes selected tab active
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				}
			 },
			 controllerAs:'panel'
		};
	});
})();

