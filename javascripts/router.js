define([
  'jquery',
  'underscore',
  'backbone',
  'views/index',
  'views/sign_in',
  'views/sign_up'
  ], function($, _, Backbone, IndexView, SignInView, SignUpView){
    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'index',
        'sign_in': 'signIn',
        'sign_up': 'signUp',
        '*actions': 'defaultAction'
      },
      index: function(){
        var indexView = new IndexView();
        indexView.render();
      },
      signIn: function(){
        var signInView = new SignInView();
        signInView.render();
      },
      signUp: function() {
        var signUpView = new SignUpView();
        signUpView.render();
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