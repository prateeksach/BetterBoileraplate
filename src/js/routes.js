angular.module( 'betterBP.routes', [
  'ui.router',
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  // Universal route for main content
  $stateProvider.state( 'app', {
    url: '',
    abstract: 'true',
    views: {
      "app": {
        templateUrl: 'templates/app.tpl.html'
      }
    }
  });

  // All Routes
  $stateProvider.state( 'app.home', {
    url: '/home',
    views: {
      "app-content": {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });

  // Set default route
  $urlRouterProvider.otherwise( '/home' );
})