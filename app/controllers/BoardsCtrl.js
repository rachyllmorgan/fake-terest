app.controller("BoardsCtrl", 
  ["$scope", "$firebaseArray", "storage", "$q",
  function($scope, $firebaseArray, storage, $q) {

      var ref = new Firebase("https://fake-terest.firebaseio.com/boards");

      $scope.allBoards = $firebaseArray(ref);
      // console.log($scope.allBoards);


      // *****If page refreshes, userId becomes undefined. When navigating with browser arrows or links, userId remains.
      $scope.userId = storage.getVariable("userId");
      // console.log($scope.userId);

      

      $scope.allBoards.$loaded()
        .then(function (data) {

          console.log(data);
          console.log($scope.userId);
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

}]);