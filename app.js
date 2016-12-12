var app = angular.module('angularProject', [
	'ngRoute',
	'firebase'
])

angular.module('angularProject').config(function($routeProvider) {
	$routeProvider 

	.when('/', {
		templateUrl: 'templates/main.html',
		controller: 'LoginController',
		resolve: {
	  		AuthWaitForLogged: function(Auth) {
	  			return Auth.getAuth().$waitForSignIn();
	   		}
		 }
	})

	.when('/myprofile', {
		templateUrl: 'templates/myprofile.html',
		controller: 'ProfileController',
		resolve: {
			AuthWaitForLogged: function(Auth) {
	  			return Auth.getAuth().$waitForSignIn();
	   		}
		}
	})

	.when('/team', {
		templateUrl: 'templates/team.html',
		controller: 'TeamController',
		resolve: {
			 AuthWaitForLogged: function(Auth) {
	  			return Auth.getAuth().$waitForSignIn();
	   		}
		}

	})

	.when('/profiles/:profile_id', {
		templateUrl: 'templates/otherprofiles.html',
		controller: 'ProfileIDController',
		resolve: {
			AuthWaitForLogged: function(Auth) {
	  			return Auth.getAuth().$waitForSignIn();
	   		}
		}
	})

	.when('/teams/:team_id', {
		templateUrl: 'templates/team.html',
		controller: 'TeamController',
		resolve: {
			AuthWaitForLogged: function(Auth) {
	  			return Auth.getAuth().$waitForSignIn();
	   		}
		}
	})

	.otherwise('/')

});


/* Notes:
Gaming Team Building App
Pages:
Login Screen:
	Login buttons when not logged in, and when logged in. 
	When logged in display team results in header (long term)
Profiles:
	Avatar, Name, Bio, Teams, Age, Language, Time Zone, Games,
Teams:
	View all teams, filter teams by "looking for members" (Filter by game, other things)
	Single team view page: Team Logo, Name, Games, Request join team (if not your team), list join requests, approve join request if your team,

Events
Tournament Brackets
*/
