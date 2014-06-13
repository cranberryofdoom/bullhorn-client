define([
  'jquery',
  'backbone',
  'hbs!templates/sign_up',
  'views/alerts',
  'modules/current_user'
  ], function($, Backbone, signUpTemplate, AlertsView, CurrentUser){
    var SignUpView = Backbone.View.extend({
      el: $('#container'),
      events: {
        'submit #form-sign-up': 'submitForm'
      },
      render: function(){
        this.$el.html(signUpTemplate());
      },
      submitForm: function(ev){
        var userData = $(ev.currentTarget).serializeObject();
        view = this;
        $.post('users', userData).success(function(data){
          var currUserData = data.Data.User;
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
    return SignUpView;
  });