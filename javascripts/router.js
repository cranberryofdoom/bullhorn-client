define([
  'jquery',
  'underscore',
  'backbone',
  'views/index',
  'views/sign_in',
  'views/sign_up',
  'views/reset_password'
  ], function($, _, Backbone, IndexView, SignInView, SignUpView, ResetPasswordView){
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
        indexView.render();
      },
      signIn: function(){
        var signInView = new SignInView();
        signInView.render();
      },
      signUp: function() {
        var signUpView = new SignUpView();
        signUpView.render();
      },
      resetPassword: function(token) {
        var resetPasswordView = new ResetPasswordView();
        resetPasswordView.render(token);
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