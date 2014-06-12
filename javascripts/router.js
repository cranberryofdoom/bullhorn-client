define([
  'jquery',
  'underscore',
  'backbone',
  'views/navbar',
  'views/index',
  'views/sign_in',
  'views/sign_up',
  'views/reset_password'
  ], function($, _, Backbone, NavbarView, IndexView, SignInView, SignUpView, ResetPasswordView){
    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'index',
        'sign_in': 'signIn',
        'sign_up': 'signUp',
        'reset_password&token=:token': 'resetPassword',
        '*actions': 'defaultAction'
      },
      index: function(){
        var indexView = new IndexView();
      },
      signIn: function(){
        var signInView = new SignInView();
      },
      signUp: function() {
        var signUpView = new SignUpView();
      },
      resetPassword: function(token) {
        var resetPasswordView = new ResetPasswordView();
        resetPasswordView.render(token);
      }
    });

    var initialize = function(){
      new AppRouter();
      // initialize navbar
      var navbarView = new NavbarView();
      navbarView.render();
      Backbone.history.start();
    };
    return {
      initialize: initialize
    };
  });