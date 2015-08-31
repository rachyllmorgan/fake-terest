app.controller("AuthCtrl", ["$scope", "$firebaseAuth", "$q",
	function($scope, $firebaseAuth, $q) {

    var ref = new Firebase("https://fake-terest.firebaseio.com");

    auth = $firebaseAuth(ref);

    $scope.login = function() {
      $scope.authData = null;
      $scope.error = null;

      auth.$authWithOAuthPopup("github").then(function(authData) {
        console.log("Logged in as:", authData.uid);
      }).catch(function(error) {
        console.log("Authentication failed:", error);
      });
    };
  }
]);

