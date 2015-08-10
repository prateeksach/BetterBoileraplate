angular.module( 'betterBP.controllers.app', [

])

.controller( 'AppCtrl', function AppCtrl ( $scope, $rootScope, User ) {
  // Initialize all variables on app load
  $rootScope.pageTitle = "";
  $rootScope.pageName = "";

  $rootScope.resetVariables = function() {
    $rootScope.currentUser = null;
  }

  $rootScope.resetVariables();

  // Check if a user is logged in and remember it on run time
  if(Parse.User.current()) {
    $rootScope.currentUser = Parse.User.current();
  }
  
  // Logout user by deleting Parse User and reseting all global variables
  $rootScope.logoutUser = function() {
    Parse.User.logOut();
    $rootScope.resetVariables();
  }

  // Update page title on route change
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if(angular.isDefined(toState.data.pageTitle)) {
      $rootScope.pageTitle = toState.data.pageTitle + ' | BetterBP';
      $rootScope.pageName = toState.data.pageTitle;
    }
  });
});