angular.module('angularProject').controller('ProfileIDController', function($scope, $routeParams, Profile) {

	console.log($routeParams.profile_id)
	$scope.currentUser = Profile.getProfile($routeParams.profile_id);

});