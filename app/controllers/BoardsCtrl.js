app.controller("BoardsCtrl", 
  ["$scope", "$firebaseArray", "storage", "$q", "$routeParams", "$location",
  function($scope, $firebaseArray, storage, $q, $routeParams, $location) {

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
          console.log($scope.userBoards[0].pins);
          $scope.pinPic = $scope.userBoards[0].pins;
          console.log($scope.pinPic);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });

}]);