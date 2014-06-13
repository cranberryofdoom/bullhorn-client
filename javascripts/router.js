define([
  'jquery',
  'underscore',
  'backbone',
  'views/navbar',
  'views/index',
  'views/sign_in',
  'views/sign_up',
  'views/forgot_password',
  'views/reset_password',
  'views/confirm_email'
  ], function($, _, Backbone, NavbarView, IndexView, SignInView, SignUpView, ForgotPasswordView, ResetPasswordView, ConfirmEmailView){
    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'index',
        'sign_in': 'signIn',
        'sign_up': 'signUp',
        'forgot_password': 'forgotPassword',
        'reset_password&token=:token': 'resetPassword',
        'users/:id/confirm&token=:token': 'confirmEmail',
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
      forgotPassword: function() {
        var forgotPasswordView = new ForgotPasswordView();
        forgotPasswordView.render();
      },
      resetPassword: function(token) {
        var resetPasswordView = new ResetPasswordView();
        resetPasswordView.render(token);
      },
      confirmEmail: function(id, token) {
        console.log({id: id, token: token});
        var confirmEmailView = new ConfirmEmailView();
        confirmEmailView.render(id, token);
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