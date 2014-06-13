define([
  'jquery',
  'backbone',
  'hbs!templates/sign_in',
  'views/alerts',
  'modules/current_user'
  ], function($, Backbone, signInTemplate, AlertsView, CurrentUser){
    var SignInView = Backbone.View.extend({
      el: $('#container'),
      events: {
        'submit #form-sign-in': 'submitForm'
      },
      render: function(){
        this.$el.html(signInTemplate());
      },
      submitForm: function(ev){
        var userData = $(ev.currentTarget).serializeObject();
        view = this;
        $.post('sessions', userData).success(function(data){
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
    return SignInView;
  });