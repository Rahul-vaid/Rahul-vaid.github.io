(function(){
	var app = angular.module('profile',['ngAnimate','ngRoute']);
	//controller for routing
	app.controller('HeaderController', ['$scope','$route', function($scope,$route){
		$scope.showSlider = false;
		$scope.$route = $route;
	}])
	//controller for skill set
	app.controller('skillController', ['$http','$scope', function($http,$scope){
		$http.get('js/skills.json').success(function(data){
			$scope.skills= data.skills;
		})
	}])
	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/about', {
				templateUrl : 'pages/about.html',
				activetab : 'about'
				
			})
			// route for the about page
			.when('/portfolio', {
				templateUrl : 'pages/home.html',
				activetab : 'portfolio'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				activetab : 'contact'
			})
			// default home
			.otherwise ({
				redirectTo : '/about',
				activetab : 'about'
			})
	});

})();	
