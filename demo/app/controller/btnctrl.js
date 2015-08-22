'use strict';

angular.module('myApp.image', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'controller/imageview.html',
    controller: 'buttonCtrl'
  });
}])
.service('imageService',[function(){
	return {
		loadAllImageSrc:function(){
			//should call rest services to return all src
			//initial get request: localhost:/8081/v1/mongo/getimgsrc
			return ["https://www.google.com/images/srpr/logo11w.png","https://www.google.com.hk/images/srpr/logo11w.png"];
		}
	}
}])
.controller('buttonCtrl', ['$scope','imageService',function($scope,imageService) {
	$scope.showAllImages = function(){
		$scope.imageSources = imageService.loadAllImageSrc();
	};
}]);