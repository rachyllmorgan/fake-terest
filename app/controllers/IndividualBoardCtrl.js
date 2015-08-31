app.controller("IndividualBoardCtrl", 
  ["$scope", "$firebaseArray", "storage", "$q",
  function($scope, $firebaseArray, storage, $q) {


    var ref = new Firebase("https://fake-terest.firebaseio.com/boards");

    $scope.allBoards = $firebaseArray(ref);
      // console.log($scope.allBoards);

    $scope.userId = storage.getVariable("userId");
      console.log($scope.userId);

    $scope.thisBoard = storage.getVariable("boardDetailName");
    console.log($scope.thisBoard);


    $scope.allBoards.$loaded()
        .then(function (data) {

          console.log(data);
          $scope.thisBoardPins = [];
          for (var key in data) {

            if (data[key].name === $scope.thisBoard) { 
              // console.log(data[key]);
              $scope.thisBoardPins = data[key].pins;
            }
          }
          console.log($scope.thisBoardPins);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });



}]);