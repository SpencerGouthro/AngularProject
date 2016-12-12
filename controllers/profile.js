angular.module('angularProject').controller('ProfileController', function($scope, Auth, AuthWaitForLogged) {

	if (AuthWaitForLogged == null) {

		// nobody is logged in
		$scope.isLoggedIn = false;
		console.log("Not logged in");
	}
	else {

		// somebody is logged in
		$scope.isLoggedIn = true;
		$scope.currentUser.info = Auth.checkUser(AuthWaitForLogged);

		console.log("logged in");
		console.log($scope.currentUser.info);
	}


});