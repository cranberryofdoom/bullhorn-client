define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	], function($, _, Backbone, Router){
		var initialize = function(){
      // connect to bullhorn-server
      $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
      	options.url = 'http://localhost:9000/' + options.url;
      	options.xhrFields = {
          withCredentials: true
        };
      });
      // convert form data to JSON
      $.fn.serializeObject = function() {
      	var o = {};
      	var a = this.serializeArray();
      	$.each(a, function() {
      		if (o[this.name] !== undefined) {
      			if (!o[this.name].push) {
      				o[this.name] = [o[this.name]];
      			}
      			o[this.name].push(this.value || '');
      		} else {
      			o[this.name] = this.value || '';
      		}
      	});
      	return o;
      };
      Router.initialize();
    };
    return {
    	initialize: initialize
    };
  });