define([
	'jquery',
	'underscore',
	'hbs!templates/alert'
	], function($, _, alertTemplate) {
		var Alerts = function() {};
		Alerts.prototype.render = function(alertType, msgs) {
			var html = alertTemplate({'alertType': alertType, 'msgs': msgs});
			$("#alert-placeholder").html(html);
		}
		Alerts.prototype.clear = function() {
			$("#alert-placeholder").html("");
		}
		// create alerts from the json Errors or Messages fields
		Alerts.prototype.createFromResponse = function(data) {
			if (data.responseJSON !== undefined) {
				data = data.responseJSON;
			}
			console.log(data)
			if (data.Messages !== undefined) {
				this.render('success', data.Messages);
			} else if (data.Errors !== undefined) {
				this.render('warning', data.Errors);
			}
			applyToFields(data);
		}
		// apply the .has-warning class to the affected fields
		function applyToFields(data) {
			_.each(data.Keys, function(key) {
				$("#"+key).parent(".form-group").addClass("has-warning");
			});
		}

		return Alerts;
	});