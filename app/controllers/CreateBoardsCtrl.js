app.controller("CreateBoardsCtrl", 
  ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

    $scope.newBoardName = "";

    $scope.createBoard = function () {
      var ref = new Firebase('https://fake-terest.firebaseio.com/boards');
      
      var boards = $firebaseArray(ref);
      boards.$add({
        name: $scope.newBoardName,
        user_id: "fake id"
        }).then(function() {
          console.log("success");
        });
    };
  }
]);