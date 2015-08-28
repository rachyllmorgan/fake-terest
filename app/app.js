var app = angular.module("FakeTrestApp", ['ngRoute', 'firebase']);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/usersId', {
	        templateUrl: 'app/partials/landing.html',
	        controller: 'LandingCtrl'
	      })
	      .when('/usersId/boards', {
	        templateUrl: 'app/partials/boards.html',
	        controller: 'BoardsCtrl'
	      })
				.when('/usersId/boards/pins', {
				templateUrl: 'app/partials/pins.html',
				controller: 'PinsCtrl'
				})
	      .otherwise({
	        redirectTo: '/'
	      });
	  }
	]);