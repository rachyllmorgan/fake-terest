var app = angular.module("FakeTrestApp", ['ngRoute', 'firebase']);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/users', {
	        templateUrl: './app/partials/landing.html',
	        controller: 'LandingCtrl'
	      })
	      .when('/users/boards', {
	        templateUrl: './app/partials/boards.html',
	        controller: 'BoardsCtrl'
	      })
				.when('/users/boards/pins', {
				templateUrl: './app/partials/pins.html',
				controller: 'PinsCtrl'
				})
	      .otherwise({
	        redirectTo: '/'
	      });
	  }
	]);