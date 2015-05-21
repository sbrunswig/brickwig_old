(function (angular) {
  "use strict";

  var app = angular.module('myApp.minifigs', ['ngRoute', 'firebase.utils', 'firebase']);

  app.controller('MinfigCtrl', ['$scope', 'minifigList', function($scope, minifigList) {
    $scope.minifigs = minifigList;
  }]);

  app.factory('minifigList', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
    var ref = fbutil.ref('MINIFIGS');
    return $firebaseArray(ref);
  }]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/minifigs', {
      templateUrl: 'minifigs/minifigs.html',
      controller: 'MinfigCtrl'
    });
  }]);

})(angular);