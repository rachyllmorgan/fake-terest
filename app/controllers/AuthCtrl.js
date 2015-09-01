app.controller("AuthCtrl", ["$scope", "$firebaseAuth", "$q", "storage", "$location",
  function($scope, $firebaseAuth, $q, storage, $location) {

    var ref = new Firebase("https://fake-terest.firebaseio.com");

    auth = $firebaseAuth(ref);

    $scope.login = function(loginType) {
      
      $scope.error = null;

        auth.$authWithOAuthPopup(loginType).then(function(authData) {
          
            console.log("Logged in as:", authData.uid);
            storage.addVariable("userId", authData.uid);
            $location.url('/users/' + authData.uid);
        }).catch(function(error) {
          console.log("Authentication failed:", error);
        });
      };

}]);



