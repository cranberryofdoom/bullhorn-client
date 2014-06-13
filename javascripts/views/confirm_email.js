define([
  'jquery',
  'backbone',
  'views/alerts',
  'modules/current_user',
  'hbs!templates/confirm_failed'
  ], function($, Backbone, AlertsView, CurrentUser, confirmFailedTemplate){
    var SignInView = Backbone.View.extend({
      el: $('#container'),
      events: {
        'submit #form-sign-in': 'submitForm'
      },
      render: function(id, token){
        this.$el.html("<p>Please wait while we confirm your email address...</p>");
        this.confirmEmail(id, token);
      },
      confirmEmail: function(id, token) {
        console.log({id: id, token: token});
        var data = {token: token};
        $.post('users/'+id+'/confirm', data).success(function(data){
          console.log(data);
          if (CurrentUser.toJSON() !== null && data.Data !== undefined) {
            // if a user is currently signed in, update the CurrentUser data.
            var currUserData = data.Data.User;
            CurrentUser.set({
              email: currUserData.Email,
              confirmed: currUserData.Confirmed,
              id: currUserData.Id
            });
          }
          Backbone.history.navigate('', {trigger: true});
          alertsView = new AlertsView();
          alertsView.renderFromResponse(data);
        }).fail(function(data){
          this.$el.html(confirmFailedTemplate());
          alertsView = new AlertsView();
          alertsView.renderFromResponse(data);
        });
        return false;
      }
    });
    return SignInView;
  });