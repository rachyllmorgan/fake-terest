app.controller("BoardsCtrl", 
  ["$scope", "$firebaseArray", "$firebaseObject", "storage", "$q", "$routeParams", "$location",
  function($scope, $firebaseArray, $firebaseObject, storage, $q, $routeParams, $location) {

      $scope.boardSearch = "";

      var ref = new Firebase("https://fake-terest.firebaseio.com/boards");

      $scope.allBoards = $firebaseArray(ref);
      // console.log($scope.allBoards);

      $scope.pinPic = [];

      // *****If page refreshes, userId becomes undefined. When navigating with browser arrows or links, userId remains.
      $scope.userId = storage.getVariable("userId");
      // console.log($scope.userId);

      $scope.showBoardPins = function (board) {

        $scope.boardDetail = board.name;
        $scope.boardDetail = $routeParams.boardName;

        $location.url('/users/' + $scope.userId + '/boards/' + board.name);

        storage.addVariable("boardDetailName", board.name);
      };

      $scope.allBoards.$loaded()
        .then(function (data) {

          $scope.userBoards = [];
          for (var key in data) {
            // console.log(data[key].user_id);

            if (data[key].user_id === $scope.userId) { 
              // console.log(data[key]);
              $scope.userBoards.push(data[key]);
            }
          }
          console.log($scope.userBoards);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });

  $scope.getPicture = function (board) {
    console.log(board.pins);
    var boardPinKeys = Object.keys(board.pins);
    console.log(boardPinKeys);
    var firstPin = board.pins[boardPinKeys[0]];
    console.log(firstPin);

    return firstPin.img_src;

  };

    // deletes from list
  $scope.removeBoard = function(board) {
    console.log("board", board);

      var ref = new Firebase("https://fake-terest.firebaseio.com/boards/" + board.$id);
      board = $firebaseObject(ref);

    console.log("board ref", board);

      board.$remove().then(function(ref) {
        // update the DOM

        console.log("removed board", board);
        // data has been deleted locally and in the database
      }, function(error) {
        console.log("Error:", error);
      });
  };

}]);