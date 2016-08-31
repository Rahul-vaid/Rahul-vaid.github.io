(function() {
    var app = angular.module('profile', ['ngAnimate', 'ngRoute']).run(function($rootScope, $http) {
        //loading json file for project info once only
        $http.get('js/projects.json').success(function(data) {
            $rootScope.projects = data.projects;
        })
        $rootScope.$on('$routeChangeStart', function (event, next) {
            if(next.activetab != 'projects')
                $rootScope.flag = false;
            //console.log(next);
            $(window).scrollTop(0);
        })
    });
    //main controller 
    app.controller('mainController',function($scope){
        $scope.showslider = false;
    })
    //controller for routing
    app.controller('HeaderController', ['$scope', '$route', function($scope, $route) {
            $scope.$route = $route;
        }])
        //controller for skill set
    app.controller('skillController', ['$http', '$scope', function($http, $scope) {
        $http.get('js/skills.json').success(function(data) {
            $scope.skills = data.skills;
        })
    }])
    // adding class to ng-view
    app.controller('classController', function($rootScope){
        $rootScope.addScalingClass = function(){
            $rootScope.flag = true;
        }

    })
    //controller for loading particular project through route parameters
    app.controller('projectDescriptionController', function($scope, $routeParams, $rootScope) {
            var index = parseInt($routeParams.key);
            $scope.record = $rootScope.projects[index - 1];
        })
        //controller for profile summary
    app.controller('profileSummaryController', function($http, $scope, $timeout) {
            $scope.loader = true;
            $http.get('js/profile-summary.json').success(function(data) {
                    $scope.summary = data.summary;
                    //console.log(data.summary.length);
                    // assigning json data to a variable profiledata
                    $scope.profiledata = data;
                    // limiting the list initially to 5 only        
                    $scope.quantity = 5;
                    $scope.showBtn = true;
                })
                // removing btn click to load more from DOM and showing loader
            $scope.hidebtn = function() {
                $scope.loader = false;
                $scope.showBtn = false;
                $timeout(function() {
                    $scope.quantity = $scope.profiledata.summary.length;
                    $scope.loader = true;
                }, 3000)
            }
        })
        // controller for hiding and showing skill list
    app.controller('skillListController', ['$scope', function($scope) {
        $scope.skillset = true;

    }])

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

        // route for the home page
            .when('/about', {
                templateUrl: 'pages/about.html',
                activetab: 'about'

            })
            // route for the about page
            .when('/portfolio', {
                templateUrl: 'pages/home.html',
                activetab: 'portfolio'
            })
            // route for the contact page
            .when('/contact', {
                templateUrl: 'pages/contact.html',
                activetab: 'contact'
            })
            .when('/projects/:key', {
                templateUrl: 'pages/projects.html',
                activetab: 'projects'
            })
            // default home
            .otherwise({
                redirectTo: '/about',
                activetab: 'about'
            })
    });

})();
