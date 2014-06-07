define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/index',
  'hbs!templates/sign_up',
  'hbs!templates/alert',
  'modules/alerts'
  ], function($, _, Backbone, AppRouter, Index, signUpTemplate, alertTemplate, Alerts){
    var SignInView = Backbone.View.extend({
      el: $('#container'),
      events: {
        'submit #form-sign-up': 'submitForm'
      },
      initialize: function(){
        this.render();
      },
      render: function(){
        this.$el.html(signUpTemplate());
      },
      submitForm: function(ev){
        var userData = $(ev.currentTarget).serializeObject();
        view = this;
        $.post('users', userData).done(function(data){
          console.log(data);
          alerts = new Alerts();
          alerts.createFromResponse(data);
          console.log("SUCCESS!");
        }).fail(function(data){
          alerts = new Alerts();
          alerts.createFromResponse(data);
          console.log("YOU ARE A COMPLETE FAILURE, ALEX!");
        });
        return false;
      }
    });
    return SignInView;
  });