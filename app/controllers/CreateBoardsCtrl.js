app.controller("CreateBoardsCtrl", 
  ["$scope", "$firebaseArray", "storage",
  function($scope, $firebaseArray, storage) {

    $scope.newBoardName = "";

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