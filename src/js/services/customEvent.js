angular.module( 'betterBP.services.customEvent', [

])

.factory('CustomEvent', function ($q) {
    var CustomEvent = Parse.Object.extend("CustomEvent", {
      	// Instance methods
        initialize: function(attrs, options) {

        }
    }, {
      	// Class methods
    });

    return CustomEvent;
});