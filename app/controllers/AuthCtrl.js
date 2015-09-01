app.controller("AuthCtrl", ["$scope", "$firebaseAuth", "$q", "storage", "$location",
  function($scope, $firebaseAuth, $q, storage, $location) {

    var ref = new Firebase("https://fake-terest.firebaseio.com");
    console.log("auth response", ref.getAuth());

    // auth = $firebaseAuth(ref);
    var authData = ref.getAuth();

    $scope.login = function (loginType) {
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
          $location.url('/users/' + authData.uid);
        }
    };

    
    


    // $scope.login = function(loginType) {
      
    //   $scope.error = null;

    //   // Only show popup if authData is null
    //   if (userIdObject === null) {
    //       auth.$authWithOAuthPopup(loginType).then(function(authData) {
            
    //           console.log("Logged in as:", authData.uid);
    //           storage.addVariable("userId", authData.uid);
    //           $location.url('/users/' + authData.uid);
    //       }).catch(function(error) {
    //         console.log("Authentication failed:", error);
    //       });
    //     } else {
    //       storage.addVariable("userId", userIdObject.uid);
    //     }

    //   // Else store authData.uid in factory
    // };

}]);



