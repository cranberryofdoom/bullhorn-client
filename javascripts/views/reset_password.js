define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'hbs!templates/reset_password',
  'models/user',
  'modules/alerts',
  'modules/current_user'
  ], function($, _, Backbone, AppRouter, resetPasswordTemplate, User, Alerts, CurrentUser){
    var ResetPasswordView = Backbone.View.extend({
      el: $('#container'),
      events: {
        'submit #form-reset-password': 'submitForm'
      },
      render: function(token){
        this.$el.html(resetPasswordTemplate({token: token}));
      },
      submitForm: function(ev){
        var userData = $(ev.currentTarget).serializeObject();
        view = this;
        $.post('reset_password', userData).success(function(data){
          console.log(data);
          Backbone.history.navigate('', {trigger: true});
          alerts = new Alerts();
          alerts.createFromResponse(data);
        }).fail(function(data){
          alerts = new Alerts();
          alerts.createFromResponse(data);
        });
        return false;
      }
    });
    return ResetPasswordView;
  });