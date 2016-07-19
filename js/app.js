(function(){
	var app = angular.module('profile',['ngRoute']);
	
	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'pages/about.html',
				
			})
			// route for the about page
			.when('/about', {
				templateUrl : 'pages/home.html',
			})
			// default home
			.otherwise ({
				redirectTo : '/home'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
			})
	});

})();	
