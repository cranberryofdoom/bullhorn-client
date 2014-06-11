define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/index',
  'hbs!templates/sign_in',
  'hbs!templates/alert',
  'modules/alerts'
  ], function($, _, Backbone, AppRouter, Index, signInTemplate, alertTemplate, Alerts){
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
        $.post('sessions', userData).done(function(data){
          alerts = new Alerts();
          Backbone.history.navigate('', {trigger: true});
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