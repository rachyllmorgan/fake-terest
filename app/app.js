var app = angular.module("FakeTrestApp", ['ngRoute', 'firebase']);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	    	.when('/', {
	        templateUrl: './app/partials/login-modal.html',
	        controller: 'AuthCtrl',
	        data: {
        		requireLogin: false
      		}
	      })
	      .when('/users/:userId', {
	        templateUrl: './app/partials/landing.html',
	        controller: 'LandingCtrl'
	      })
	      .when('/users/:userId/boards', {
	        templateUrl: './app/partials/boards.html',
	        controller: 'BoardsCtrl'
	      })
        .when('/users/:userId/boards/create', {
          templateUrl: './app/partials/create-boards.html',
          controller: 'CreateBoardsCtrl'
        })
        .when('/users/:userId/boards/:boardName', {
          templateUrl: './app/partials/individual-boards.html',
          controller: 'IndividualBoardCtrl'
        })
    		.when('/users/:userId/pins', {
    			templateUrl: './app/partials/pins.html',
    			controller: 'PinsCtrl'
				})
				.when('/users/:userId/pins/create', {
					templateUrl: './app/partials/create-pins.html',
					controller: 'CreatePinsCtrl'
    		})
	      .otherwise({
	        redirectTo: '/'
	      });

	  }]);