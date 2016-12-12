angular.module('angularProject').factory('Profile', function($firebaseArray, $firebaseObject) {

	var profileRef = firebase.database().ref().child("profile");

	var Profile = {
			profile: [],

		getProfile: function(profile_id) {
			var IndividualProfileRef = profileRef.child(profile_id);
			return $firebaseObject(IndividualProfileRef);
		},

		getProfiles: function() {
			return Profile.profile;
		}
	};

	Profile.profile = $firebaseArray(profileRef);

	return Profile;

});