define([
  'jquery',
  'underscore',
  'backbone',
  'views/indexView'
  ], function($, _, Backbone, IndexView){
    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'index',
        '*actions': 'defaultAction'
      },
      index: function(){
        console.log("jkljkljkl");
        var indexView = new IndexView();
        indexView.render();
      }
    });

    var initialize = function(){
      var app_router = new AppRouter();
      Backbone.history.start();
    };
    return {
      initialize: initialize
    };
  });