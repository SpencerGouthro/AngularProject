angular.module('angularProject').factory('Auth', function($firebaseAuth, $firebaseObject) {

	var auth = $firebaseAuth();
	var loggedIn = false;

	auth.$onAuthStateChanged(function(firebaseUser) {
		if (firebaseUser) {
			var profileRef = firebase.database().ref().child("profile").child(firebaseUser.uid);
			Auth.user = $firebaseObject(profileRef);
			Auth.user.$loaded().then(function() {
				console.log("Signed in as:", firebaseUser.uid);
				console.log(firebaseUser);

			});
			//	Auth.user = firebaseUser;
				
		} else {
			console.log("Not signed in");
		}
	});

	var Auth = {
		user: {},

		loginWithFacebook: function() {
			return auth.$signInWithPopup("facebook");
		},

		loginWithTwitter: function() {
			return auth.$signInWithPopup("twitter");
		},

		isLoggedIn: function() {
			return Auth.user != {};
		},

		getUser: function() {
			return Auth.user;
		},

		getAuth: function() {
			return auth;
		},

		checkUser: function(user) {
			var ref = firebase.database().ref().child('profile').child(user.uid);
			var theUser = $firebaseObject(ref);
			theUser.$loaded().then(function() {
				theUser.display_name = user.displayName;
				theUser.email = user.email;
				theUser.profilepic = user.photoURL;
				theUser.$save();
			});
			return theUser;
		},
		
		logout: function() {
			return auth.$signOut();
		},
	};

	return Auth;
});