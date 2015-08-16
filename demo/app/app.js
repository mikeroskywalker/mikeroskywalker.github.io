'use strict';

// Declare app level module which depends on views, and components
angular.module('angularDemoApp', ['ngRoute','ngResource']).
	config(['$routeProvider', function($routeProvider) {

	  	$routeProvider.otherwise({
	  		templateUrl: 'demoview/demoview.html'});
	}]);
