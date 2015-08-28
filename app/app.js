var app = angular.module("FakeTrestApp", ['ngRoute', 'firebase']);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/users', {
	        templateUrl: 'partials/landing.html',
	        controller: 'LandingCtrl'
	      })
	      .when('/users/boards', {
	        templateUrl: 'partials/boards.html',
	        controller: 'BoardsCtrl'
	      })
				.when('/users/boards/pins', {
				templateUrl: 'partials/pins.html',
				controller: 'PinsCtrl'
				})
	      .otherwise({
	        redirectTo: '/'
	      });
	  }
	]);