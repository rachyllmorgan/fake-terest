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
	      .when('/users', {
	        templateUrl: './app/partials/landing.html',
	        controller: 'LandingCtrl',
	       //  data: {
        // 		requireLogin: true 
      		// }
	      })
	      .when('/users/boards', {
	        templateUrl: './app/partials/boards.html',
	        controller: 'BoardsCtrl',
	      	// data: {
        // 		requireLogin: true 
      		// }
	      })
				.when('/users/boards/pins', {
				templateUrl: './app/partials/pins.html',
				controller: 'PinsCtrl',
				// data: {
    //     		requireLogin: true 
    //   		}
				})
	      .otherwise({
	        redirectTo: '/'
	      });

	  }]);