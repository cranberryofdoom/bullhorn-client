// a helper function for getting the current_user
define([
	'jquery',
	'underscore',
	'backbone',
	'models/user'
	], function($, _, Backbone, User) {
		var currentUser = new User();
		currentUser.initialize = function(callback) {
			$.get("sessions").success(function(data) {
				currUserData = data.Data.User;
				currentUser.set({
					email: currUserData.Email,
					confirmed: currUserData.Confirmed,
					id: currUserData.Id 
				});
				callback();
			}).error(function(data) {
				currentUser = new User();
				callback();
			});
		};
		// override toJSON to return null if none of the attributes are set
		// this is useful for view templates, where the empty object that would
		// be returned by toJSON() is considered true-ish.
		currentUser.toJSON = function() {
			console.log("toJSON called");
			if (this.get("email") === undefined) {
				console.log("invalid motha fucka");
				return null;
			} else {
				console.log("it should be valid, bitch!");
				return Backbone.Model.prototype.toJSON.call(this)
			}
		};
		// anytime the current user changes (e.g. during sign in or sign up),
		// reload the navbar
		return currentUser;
	});