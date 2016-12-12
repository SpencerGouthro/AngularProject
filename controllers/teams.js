angular.module('angularProject').controller('TeamController', function($scope, Auth, AuthWaitForLogged, Team, $routeParams) {
	
	$scope.TeamsList = Team.getTeams();
	// $scope.editTeam = {};

	if ($routeParams.team_id != undefined) {
		$scope.currentTeam = Team.getTeam($routeParams.team_id);
		$scope.MemberList = Team.getTeamMembers($routeParams.team_id);
	}

	if (AuthWaitForLogged == null) {

			// nobody is logged in
			$scope.isLoggedIn = false;
			console.log("Not logged in");
		}
		else {

			// somebody is logged in
			$scope.isLoggedIn = true;
			$scope.currentUser = Auth.checkUser(AuthWaitForLogged);
			// $scope.currentUser=Auth.getUser();

			console.log("logged in");
			console.log($scope.currentUser);
		}

// GETTING RID OF EDIT TEAM
	// $scope.showEditTeam = function() { 
	// 	$scope.editTeam = Team.getTeam($routeParams.team_id);
	// 	$("#editTeamModal").modal('show');
	// };

	// $scope.updateTeam = function() {
	// 	Team.saveTeam($scope.editTeam).then(function() {
	// 		$("#editTeamModal").modal('hide');
	// 	});
	// };

	$scope.joinTeam = function() {
		var member = {
			userid: $scope.currentUser.$id,
			name: $scope.currentUser.display_name
		}
		Team.addTeamMember($routeParams.team_id, member);
	};

	$scope.leaveTeam = function() {
		var member = {
			userid: $scope.currentUser.$id,
			name: $scope.currentUser.display_name
		}
		Team.removeTeamMember($routeParams.team_id, $scope.currentUser);
	};

});


