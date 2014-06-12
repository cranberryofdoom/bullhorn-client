// a helper function for getting the current_user
define([
	'jquery',
	'models/user'
	], function($, User) {
		var currentUser = null;
		var get = function() {
			return currentUser;
		};
		var set = function(userData) {
			if (currentUser == null) {
				currentUser = new User(userData);
			} else {
				currentUser.set(userData);
			}
		};
		var initialize = function(callback) {
			$.get("sessions").success(function(data) {
				currUserData = data.Data.User;
				set({
					email: currUserData.Email,
					confirmed: currUserData.Confirmed,
					id: currUserData.Id 
				});
				callback();
			}).error(function(data) {
				currentUser = null;
				callback();
			});
		}
		return {
			get: get,
			set: set,
			initialize: initialize
		};
	});