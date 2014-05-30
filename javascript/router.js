define([
  'jquery',
  'underscore',
  'backbone',
  ], function($, _, Backbone){
    var AppRouter = Backbone.Router.extend({
      routes: {
        '/': 'index',
        '*actions': 'defaultAction'
      }
    });

    var initialize = function(){
      var app_router = new AppRouter();
      app_router.on('index', function(){
        console.log(zomg);
      });
      app_router.on('defaultAction', function(actions){
        console.log('No route:', actions);
      });
      Backbone.history.start();
    };
    return {
      initialize: initialize
    };
  });