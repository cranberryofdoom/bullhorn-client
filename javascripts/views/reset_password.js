define([
  'jquery',
  'backbone',
  'hbs!templates/reset_password',
  'views/alerts',
  'modules/current_user'
  ], function($, Backbone, resetPasswordTemplate, AlertsView, CurrentUser){
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
          var currUserData = data.Data.User;
          console.log(currUserData);
          CurrentUser.set({
            email: currUserData.Email,
            confirmed: currUserData.Confirmed,
            id: currUserData.Id
          });
          Backbone.history.navigate('', {trigger: true});
          alertsView = new AlertsView();
          alertsView.renderFromResponse(data);
        }).fail(function(data){
          alertsView = new AlertsView();
          alertsView.renderFromResponse(data);
        });
        return false;
      }
    });
    return ResetPasswordView;
  });