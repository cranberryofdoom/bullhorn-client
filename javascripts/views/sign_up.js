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
    var SignUpView = Backbone.View.extend({
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
          alerts = new Alerts();
          alerts.createFromResponse(data);
          $.post('sessions', userData).done(function(data){
            alerts = new Alerts();
            alerts.createFromResponse(data);
            Backbone.history.navigate('', {trigger: true});
          }).fail(function(data){
            alerts = new Alerts();
            alerts.createFromResponse(data);
          });
        }).fail(function(data){
          alerts = new Alerts();
          alerts.createFromResponse(data);
        });
        return false;
      }
    });
    return SignUpView;
  });