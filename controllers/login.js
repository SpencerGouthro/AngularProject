angular.module('angularProject').controller('LoginController', function($scope, Auth, AuthWaitForLogged, Profile, Team) {

	if (AuthWaitForLogged == null) {

		// nobody is logged in
		$scope.isLoggedIn = false;
	}
	else {

		// somebody is logged in
		$scope.isLoggedIn = true;
		$scope.currentUser.info = Auth.checkUser(AuthWaitForLogged);
		}

	$scope.ProfileList = Profile.getProfiles();
	$scope.TeamsList = Team.getTeams();


	$scope.loginWithFacebook = function() {
		
		// login with Facebook
		Auth.loginWithFacebook().then(function(firebaseUser) {
			$scope.isLoggedIn = true;
			console.log("Signed in as:", firebaseUser.user.displayName);
			console.log(firebaseUser);
		}).catch(function(error) {
			console.log("Authentication failed:", error);
		});
	};

	$scope.loginWithTwitter = function() {
		
		// login with Twitter
		Auth.loginWithTwitter().then(function(firebaseUser) {
			$scope.isLoggedIn = true;
			console.log("Signed in as:", firebaseUser.user.displayName);
			console.log(firebaseUser);
		}).catch(function(error) {
			console.log("Authentication failed:", error);
		});
	};

	$scope.logout = function() {

		Auth.logout().then(function() {
			$scope.isLoggedIn = false;
			console.log("Logging out!");
		});
	};
});

