angular.module( 'betterBP.routes', [
  'ui.router',
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  // All Routes
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "app": {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });

  // Set default route
  $urlRouterProvider.otherwise( '/home' );
})