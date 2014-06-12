require.config({
	paths: {
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
		backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
		bootstrap: 'http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min',
		hbs: 'lib/require-handlebars-plugin/hbs'
	},
	'shim': {
		'underscore': {
			'exports': '_'
		},
		'backbone': {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		},
		'bootstrap': {
			deps: ['jquery'],
			exports: "$.fn.popover"
		}
	}
});

require([
	'app'
	], function(App){
		App.initialize();
	});