app.controller("LandingCtrl", ["$scope", "$q", "$firebaseArray", "$routeParams", "storage",

    function($scope, $q, $firebaseArray, $routeParams, storage) {

    $scope.title = "MOTHERFUCKING PINTEREST";

    var ref = new Firebase("https://fake-terest.firebaseio.com/pins/");

    $scope.pins = $firebaseArray(ref);
    console.log($scope.pins);

    $scope.userId = storage.getVariable("userId");
    console.log($scope.userId);

    $scope.userId = $routeParams.userId;

}]);