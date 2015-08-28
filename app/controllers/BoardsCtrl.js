app.controller("BoardsCtrl", 
  ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

  var ref = new Firebase("https://fake-terest.firebaseio.com/boards");

  $scope.boards = $firebaseArray(ref);

  console.log($scope.boards);

  }
]);