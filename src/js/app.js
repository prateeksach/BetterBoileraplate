angular.module( 'betterBP', [
  // 3rd-Party Libraries 
  // 'ngAnimate',

  // App Routes
  'betterBP.routes',

  // Parse Services
  'betterBP.services.user',

  // Page Controllers
  'betterBP.controllers.app',
  'betterBP.controllers.home',
  
  // Custom Directives
  'betterBP.directives.stopEvent',
]);