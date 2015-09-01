app.controller("PinsCtrl", 
  ["$scope", "$firebaseArray", "$firebaseObject", "$routeParams", "$q", "storage",
  function($scope, $firebaseArray, $firebaseObject, $routeParams, $q, storage) {

    $scope.yourPinSearch = "";

  	var ref = new Firebase("https://fake-terest.firebaseio.com/pins");

  	$scope.allPins = $firebaseArray(ref);
    console.log($scope.allPins);

	$scope.userId = storage.getVariable("userId");
    console.log($scope.userId);   

      $scope.allPins.$loaded()
        .then(function (data) {
          console.log(data);
          console.log($scope.userId);
          $scope.userPins = [];
          for (var key in data) {
            // console.log(data[key].user_id);

            if (data[key].user_id === $scope.userId) { 
              // console.log(data[key]);
              $scope.userPins.push(data[key]);
            }
          }
          console.log($scope.userPins);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });

  // / deletes from list
  $scope.removePin = function(pin) {
    console.log("pin", pin);

      var ref = new Firebase("https://fake-terest.firebaseio.com/pins/" + pin.$id);
      pin = $firebaseObject(ref);

    console.log("pin ref", pin);

      pin.$remove().then(function(ref) {
        // update the DOM

        console.log("removed pin", pin);
        // data has been deleted locally and in the database
      }, function(error) {
        console.log("Error:", error);
      });
  };
}]);
