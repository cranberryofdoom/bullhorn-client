define([
	'jquery',
	'backbone',
	'underscore',
	'bootstrap',
	'hbs!templates/alert'
	], function($, Backbone, _, bs, alertTemplate) {
		var AlertsView = Backbone.View.extend({
			el: $('#alerts-placeholder'),
			render: function(alertType, msgs) {
				var html = alertTemplate({'alertType': alertType, 'msgs': msgs});
				this.$el.html(html);
			},
			clear: function() {
				this.$el.html("");
			},
			// renders alerts from the json Errors or Messages fields
			renderFromResponse: function(data) {
				if (data.responseJSON !== undefined) {
					data = data.responseJSON;
				}
				if (data.Messages !== undefined) {
					this.render('success', data.Messages);
				} else if (data.Errors !== undefined) {
					this.render('warning', data.Errors);
				}
				applyToFields(data);
			}
		});
		// apply the .has-warning class to the affected fields
		function applyToFields(data) {
			_.each(data.Keys, function(key) {
				$("#"+key).parent(".form-group").addClass("has-warning");
			});
		}
		return AlertsView;
	});