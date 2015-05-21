'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'myApp.config',
    'myApp.sets', 
    'myApp.minifigs'
  ])

  .config(function($routeProvider){
    $routeProvider.when("/",
      {
        templateUrl: "home/home.html",
        controller: "HomeCtrl",
      }
    );
  })
  .controller('HomeCtrl', function() {})

  .run(['$rootScope', function($rootScope) {}]);