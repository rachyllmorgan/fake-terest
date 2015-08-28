app.controller("LandingCtrl", ["$scope", "$q", "$firebaseArray",

    function($scope, $q, $firebaseArray) {

    $scope.title = "MOTHERFUCKING PINTEREST";

    var ref = new Firebase("https://fake-terest.firebaseio.com/pins/");

    $scope.pins = $firebaseArray(ref);
    console.log($scope.pins);



}]);