// Initialize Parse app
var PARSE_APP_ID = '<your_app_id>';
var PARSE_JAVASCRIPT_KEY = '<your_javascript_key>';
Parse.initialize(PARSE_APP_ID, PARSE_JAVASCRIPT_KEY);

// Universal functions
function trackEvent(name, options) {
    // Add your own tracking here.
    // Try Mixpanel: https://mixpanel.com/
    // Example: 'mixpanel.track(name, options);'
}

function validateEmail(email) {
    var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateUser() {
    var user = Parse.User.current();
    if (!user || !user.authenticated() || user.getSessionToken() === "")
        return false;
    return true;
}
