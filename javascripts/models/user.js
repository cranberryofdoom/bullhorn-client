define(['backbone'],
	function(Backbone) {
		var User = Backbone.Model.extend({
			defaults: {
				name: '',
				email: ''
			}
		});
		return User
	});