var app = angular.module("FakeTrestApp",
    [
        'ngRoute', 'firebase'
    ]
).factory("storage", function () {
    var bucket = {};

    return {
        getVariable: function (junk) {
            if (bucket.hasOwnProperty(junk)) {
                return bucket[junk];
            }
        },
        addVariable: function (key, value) {
            bucket[key] = value;
        }
    };
}).run(['storage', function(storage) {
    var ref = new Firebase("https://fake-terest.firebaseio.com");
    console.log("auth response", ref.getAuth());

    // auth = $firebaseAuth(ref);
    var authData = ref.getAuth();

    // $scope.login = function (loginType) {
      if (authData === null) {
        ref.$authWithOAuthPopup(loginType)
          .then(function (authData) {
            storage.addVariable("userId", authData.uid);
            $location.url('/users/' + authData.uid);
          })
          .catch(function(error) {
            console.log("Authentication failed:", error);
          });
        } else {
          storage.addVariable("userId", authData.uid);
          // user_authenticated = true;
          // $location.url('/users/' + authData.uid);
        }
    // };
}]);

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