'use strict';

// Declare app level module which depends on views, and components
var demoApp = angular.module('angularDemoApp');

demoApp.controller('demoController', ['$scope', function($scope) {
  	$scope.Test = "Show me as a demo";

  	$scope.DemoButton = function(){
  		alert("click me");
  	};
}]);