define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/index',
  'hbs!templates/sign_in',
  'hbs!templates/alert',
  'models/user',
  'modules/alerts',
  'modules/current_user'
  ], function($, _, Backbone, AppRouter, Index, signInTemplate, alertTemplate, User, Alerts, CurrentUser){
    var SignInView = Backbone.View.extend({
      el: $('#container'),
      events: {
        'submit #form-sign-in': 'submitForm'
      },
      initialize: function(){
        this.render();
      },
      render: function(){
        this.$el.html(signInTemplate());
      },
      submitForm: function(ev){
        var userData = $(ev.currentTarget).serializeObject();
        view = this;
        $.post('sessions', userData).success(function(data){
          var currUserData = data.Data.User
          CurrentUser.set({
            email: currUserData.Email,
            confirmed: currUserData.Confirmed,
            id: currUserData.Id 
          });
          console.log(CurrentUser.get());
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
    return SignInView;
  });