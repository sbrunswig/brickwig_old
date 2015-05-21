(function (angular) {
  "use strict";

  var app = angular.module('myApp.sets', ['ngRoute', 'firebase.utils', 'firebase']);

  app.controller('SetCtrl', ['$scope', 'setList', function($scope, setList) {
      $scope.sets = setList;
    }]);

  app.factory('setList', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
    var ref = fbutil.ref('SETS');
    return $firebaseArray(ref);
  }]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sets', {
      templateUrl: 'sets/sets.html',
      controller: 'SetCtrl'
    });
  }]);

})(angular);