'use strict';

// Declare app level module which depends on views, and components
var demoApp = angular.module('angularDemoApp');

demoApp.controller('demoController', ['$scope','$http', function($scope,$http) {
  	$scope.Test = "Show me as a demo";

  	$scope.DemoButton = function(){
  		$http.get("demoview/mockdata.json")
  		.success(function(data){
  			$scope.data = data;
  			 alert($scope.data[0].id);

  		});
  		//Why if I put it right here will have issue
  		//alert($scope.data[0].id);
  	};

  	  $scope.DemoRestButton = function(){
  		//use resource
  	};
}]);