angular.module( 'betterBP.services.user', [

])

.factory('User', function ($q) {
    var User = Parse.User.extend({
      	// Instance methods
        initialize: function(attrs, options) {
            this.isLoggingIn = false;
            this.loggingInError = false;

            this.isSigningUp = false;
            this.signingUpError = false;
        },

        loginUser: function(options) {
            var user = this, defer = $q.defer();
          
            // Validate input
            if(!user.get('username') || !validateEmail(user.get('username')))
                user.loggingInError = "Invalid Email";
            else if(user.get('password') == "")
                user.loggingInError = "Invalid Password"

            if(user.loggingInError) {
                defer.reject();
            } else {
                user.isLoggingIn = true;
                user.loggingInError = false;

                user.logIn({
                    success: function() {
                        user.isLoggingIn = false;
                        defer.resolve();
                    },
                    error: function(error) {
                        user.isLoggingIn = false;
                        
                        if(error.code == 101)
                            user.loggingInError = "Invalid Credentials";
                        else
                            user.loggingInError = "Login Failed";

                        defer.reject(error);
                    }
                })
            }

            return defer.promise;
        },

        signupUser: function(options) {
            var user = this, defer = $q.defer();
            options = options || {};
            
            // Validate input
            if(!user.get('username') || !validateEmail(user.get('username')))
                user.signingUpError = "Invalid Email";
            else if(!options.facebookSignup && user.get('password') == "")
                user.signingUpError = "Invalid Password";
            else if(!options.facebookSignup && user.get('password') != user.verifyPassword)
                user.signingUpError = "Passwords don't match";
            else if(user.get('name') == "")
                user.signingUpError = "Enter a Name";
            else if(user.get('graduationYear') == "" || !parseInt(user.get('graduationYear')))
                user.signingUpError = "Invalid Graduation Date"
            else if(user.get('major') == "")
                user.signingUpError = "Enter a Major";

            if(user.signingUpError) {
                defer.reject();
            } else {
                user.isSigningUp = true;
                user.signingUpError = false;

                
                user.set("email", user.get("username"));
                user.set("savedSchedules", []);
                user.set("college", new College({id:"iHJwJUjHBF"}));

                user.signUp(null, {
                    success: function() {
                        user.isSigningUp = false;
                        defer.resolve();
                    },
                    error: function(error) {
                        user.isSigningUp = false;
                        user.signingUpError = "Signup Failed";

                        defer.reject(error);
                    }
                });
            }

            return defer.promise;
        },
    }, {
      	// Class methods
    });

    // Getters and setters to work with AngularJS.
    
    // Username property
    User.prototype.__defineGetter__("username", function() {
      return this.get("username");
    });
    User.prototype.__defineSetter__("username", function(aValue) {
      return this.set("username", aValue);
    });

    // Password property
    User.prototype.__defineGetter__("password", function() {
      return this.get("password");
    });
    User.prototype.__defineSetter__("password", function(aValue) {
      return this.set("password", aValue);
    });

    return User;
});