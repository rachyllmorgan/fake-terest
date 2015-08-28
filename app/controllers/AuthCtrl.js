app.controller("AuthCtrl", ["$scope", "$firebaseAuth", 
	function($scope, $firebaseAuth) {

    var ref = new Firebase("https://fake-terest.firebaseio.com");

    auth = $firebaseAuth(ref);

    $scope.login = function() {
      $scope.authData = null;
      $scope.error = null;

      ref.authWithOAuthPopup("github", function(authData) {
        $scope.authData = authData;
        console.log("$scope.authData", $scope.authData);
      }).catch(function(error) {
        $scope.error = error;
        console.log("error", error)
      });
    };
  }
]);

