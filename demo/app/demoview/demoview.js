'use strict';

// Declare app level module which depends on views, and components
angular.module('angularDemoApp.controller',['ngResource']).controller('demoController', ['$scope','$http', '$resource',
	function($scope,$http,$resource) {
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
	  		var Testmsg = $resource('http://www.localhost:8000/api/v1/test/:id',{},{
          		query: {method:'GET',isArray:false}
	  		});
	  		var msgs = Testmsg.query(function(){
	  			console.log(msgs);
	  		});
	  	};
	}]);