define([
	'jquery',
	'underscore',
	'backbone',
	'router',
  'modules/current_user'
	], function($, _, Backbone, Router, CurrentUser){
		var initialize = function(){
      // use bullhorn-server url and send session data by default
      $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        // TODO: eek! get rid of this disgusting hack. ajaxPrefilters should only happen once,
        // but for some reason it is not loaded yet in modules/current_user so I have
        // the prefilters being set in both locations. The if statement is to avoid
        // setting the url prefix twice.
        if (options.url.indexOf('http://localhost:9000/') === -1) {
          options.url = 'http://localhost:9000/' + options.url;
        }
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
      CurrentUser.initialize(function() {
        Router.initialize();
      });
    };
    return {
    	initialize: initialize
    };
  });