// Initialize Parse app
var PARSE_APP_ID = 'your_app_id';
var PARSE_JAVASCRIPT_KEY = 'your_javascript_key';

Parse.initialize(PARSE_APP_ID, PARSE_JAVASCRIPT_KEY);

// Initialize Angular App and require all modules
angular.module( 'betterBP', [
  // 3rd-Party Libraries 
  'ngAria',
  'ngAnimate',
  'ngMaterial',

  // App Routes
  'betterBP.routes',

  // Parse Services
  'betterBP.services.user',
  'betterBP.services.customEvent',

  // Page Controllers
  'betterBP.controllers.app',
  'betterBP.controllers.home',
  
  // Custom Directives
  'betterBP.directives.stopEvent',

  // Templates
  'templates.module'
]);