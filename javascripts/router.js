define([
  'jquery',
  'underscore',
  'backbone',
  'views/index',
  'views/sign_in'
  ], function($, _, Backbone, IndexView, SignInView){
    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'index',
        'sign_in': 'signIn',
        '*actions': 'defaultAction'
      },
      index: function(){
        var indexView = new IndexView();
        indexView.render();
      },
      signIn: function(){
        console.log("herp");
        var signInView = new SignInView();
        signInView.render();
      }
    });

    var initialize = function(){
      new AppRouter();
      Backbone.history.start();
    };
    return {
      initialize: initialize
    };
  });