app.controller("BoardsCtrl", 
  ["$scope", "$firebaseArray", "storage",
  function($scope, $firebaseArray, storage) {

      var ref = new Firebase("https://fake-terest.firebaseio.com/boards");

      $scope.allBoards = $firebaseArray(ref);

      console.log($scope.allBoards);

      $scope.userId = storage.getVariable("userId");
      console.log($scope.userId);

      

}]);