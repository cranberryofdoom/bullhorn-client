require.config({
	paths: {
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
		backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
		handlebars: 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.4/handlebars.min',
		text: 'https://cdnjs.cloudflare.com/ajax/libs/requirejs-tpl/0.0.2/tpl',
		hbars: 'http://cdnjs.cloudflare.com/ajax/libs/requirejs-handlebars/0.0.2/hbars'
	},
	shim: {
		handlebars: {
			exports: 'handlebars'
		}
	},
	hbars: {
		extension: '.handlebars',
		compileOptions: {}
	}
});

require([
	'app',
	], function(App){
		App.initialize();
	});