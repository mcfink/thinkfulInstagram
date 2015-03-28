angular.module('myApp', ['ngAnimate'])
	.controller('instaController', function($scope){
		$scope.errorsPresent = true;

		$scope.searchTerm = "";
	});