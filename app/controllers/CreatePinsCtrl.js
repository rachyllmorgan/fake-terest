app.controller("CreatePinsCtrl", 
  ["$scope", "$firebaseArray", "storage", "$q", "$location",
  function($scope, $firebaseArray, storage, $q, $location) {

    $scope.newPinName = "";
    $scope.theBoard = "";
    $scope.addToBoard = "";
    $scope.addURL = "";
    $scope.addComment = "";
    $scope.addImageURL = "";
    $scope.userId = storage.getVariable("userId");
    $scope.pinSearch = "";

    $scope.searchAllPins = function () {
      storage.addVariable("pinSearch", $scope.pinSearch);
      $location.url('/users/' + $scope.userId);
    };
    
    var ref = new Firebase('https://fake-terest.firebaseio.com/boards');
    $scope.boards = $firebaseArray(ref);

    $scope.boards.$loaded()
      .then(function (data) {
        $scope.userBoards = [];
        for (var key in data) {
          if (data[key].user_id === $scope.userId) { 
            $scope.userBoards.push(data[key]);
          }
        }
        console.log($scope.userBoards);
      })
      .catch(function(error) {
        console.error("Error:", error);
      });
    
    $scope.createPin = function () {
      var ref = new Firebase('https://fake-terest.firebaseio.com/pins');
      $scope.userId = storage.getVariable("userId");

    var newPin = {
        title: $scope.newPinName,
        user_id: $scope.userId,
        board_name: $scope.theBoard.name,
        url: $scope.addURL,
        img_src: $scope.addImageURL,
        comment: $scope.addComment
      };

      var pins = $firebaseArray(ref);
      pins.$add(
        newPin
        ).then(function() {
          // console.log(newPin);
        });

      $scope.boards.$loaded()
       .then(function (data) {
         console.log(data);
         for (var key in data) {

           if (data[key].name === $scope.theBoard.name) {
              var ref = new Firebase('https://fake-terest.firebaseio.com/boards/' + data[key].$id + '/pins');
              var boardPins = $firebaseArray(ref);
              boardPins.$add(newPin);
            }
          }
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
    };
  }
]);