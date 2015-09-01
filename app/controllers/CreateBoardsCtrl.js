app.controller("CreateBoardsCtrl", 
  ["$scope", "$firebaseArray", "storage", "$location",
  function($scope, $firebaseArray, storage, $location) {

    $scope.searchAllPins = function () {
      storage.addVariable("pinSearch", $scope.pinSearch);
      $location.url('/users/' + $scope.userId);
    };

    $scope.newBoardName = "";
    $scope.userId = storage.getVariable("userId");

    $scope.createBoard = function () {
      var ref = new Firebase('https://fake-terest.firebaseio.com/boards');
      $scope.userId = storage.getVariable("userId");

      var boards = $firebaseArray(ref);
      boards.$add({
        name: $scope.newBoardName,
        user_id: $scope.userId
        }).then(function() {
          console.log("success");
        });
    };
  }
]);