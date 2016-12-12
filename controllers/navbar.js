angular.module('angularProject').controller('NavbarController', function($scope, Team, $routeParams, Auth) {
	
	$scope.TeamsList = Team.getTeams();
	// $scope.editTeam = {};     GETTING RID OF EDIT TEAM
	$scope.currentUser = {};
	$scope.currentUser.info = {};


	$scope.showAddTeam = function() {
		$("#addTeamModal").modal('show');
		console.log("Bringing up the modal");
	};

	$scope.addTeam = function(newTeam) {
		Team.addTeam(newTeam).then(function() {
			$("#addTeamModal").modal('hide');
			console.log("Team added!")
		});
	};


	$scope.removeTeam = function(team_id) {
		Team.removeTeam(team_id);
	};

	$scope.showUpdateProfile = function() {
		$("#updateProfileModal").modal('show');
	};

	$scope.updateprofile = function() {
		$scope.currentUser.info.$save();
		$("#updateProfileModal").modal('hide');
	};
});