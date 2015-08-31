app.controller("PinsCtrl", 
  ["$scope", "$firebaseArray", "$routeParams", "$q", "storage",
  function($scope, $firebaseArray, $routeParams, $q, storage) {

  	var ref = new Firebase("https://fake-terest.firebaseio.com/pins");

  	$scope.pins = $firebaseArray(ref);

			console.log("$scope.pins", $scope.pins);

			console.log("$scope.pins[0].title", $scope.pins[0].title); 

		$scope.userId = storage.getVariable("userId");
      console.log($scope.userId);   

  }
]);