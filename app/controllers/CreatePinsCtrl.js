app.controller("CreatePinsCtrl", 
  ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

    $scope.newPinName = "";

    $scope.createBoard = function () {
      var ref = new Firebase('https://fake-terest.firebaseio.com/pins');
      
      var pins = $firebaseArray(ref);
      pins.$add({
        name: $scope.newPinName,
        user_id: "fake id"
        }).then(function() {
          console.log("success");
        });
    };
  }
]);