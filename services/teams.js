angular.module('angularProject').factory('Team', function($firebaseArray, $firebaseObject) {

	var teamRef = firebase.database().ref().child("teams");
	var teamMembersRef = firebase.database().ref().child("teamMembers");

	var Team = {
		teams: [],

		addTeam: function(newTeam) {
			return Team.teams.$add(newTeam);
		},

		getTeams: function() {
			return Team.teams;
		},

		getTeam: function(team_id) { 
			var individualTeamRef = teamRef.child(team_id);
			return $firebaseObject(individualTeamRef);
		},

		addTeamMember: function(team_id, teamMember) {
			var individualTeamRef = teamMembersRef.child(team_id).child(teamMember.userid);
			var members = $firebaseObject(individualTeamRef);
			members.$loaded().then(function() {
				members.name = teamMember.name;
				return members.$save();
			});
		},

		removeTeamMember: function(team_id, teamMember) {
			var individualTeamRef = teamMembersRef.child(team_id).child(teamMember.$id);
			var members = $firebaseObject(individualTeamRef);
			return members.$remove();
		},

		getTeamMembers: function(team_id) {
			var individualTeamRef = teamMembersRef.child(team_id);
			return $firebaseArray(individualTeamRef);
		},

		saveTeam: function(theTeam) {
			return theTeam.$save();
		},

		removeTeam: function(team_id) {
			var individualTeamRef = teamRef.child(team_id);
			var theTeam = $firebaseObject(individualTeamRef);
			return theTeam.$remove();
		},
	};

	Team.teams = $firebaseArray(teamRef);

	return Team;
});