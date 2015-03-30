angular.module('myApp', ['ngAnimate'])
	.controller('instaController', function($scope, $http){
		$scope.errorsPresent = true;

		$scope.searchTerm = "";
		$scope.searching = false;

		$scope.searchSubmission = function(tag) {
			$scope.searchEntry.$setPristine();
			$scope.searchTerm = "";
			$scope.error_message = "";
			$scope.pictures = [];
			$scope.links = [];
			$scope.searching = true;

			tag = tag.replace(/\s/g, '');

			var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent";
			$scope.url = url;
			var request = {
				callback: 'JSON_CALLBACK',
				client_id: '1ee4eb0f3f9646c6ac24b5b061d87f04'
			};

			$http({
				method: 'JSONP',
				url: url,
				params: request
			})
			.success(function(result){
				$scope.searching = false;
				$scope.number = result.data.length;
				for (var i = 0; i < result.data.length; i++){
					$scope.pictures.push(result.data[i].images.low_resolution.url);
					$scope.links.push(result.data[i].link);
				}
			})
			.error(function(){
				$scope.error_message = "Hmm... something went wrong.  Please try again";
			});

		};
	});