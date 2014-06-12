define([
  'jquery',
  'backbone',
  'hbs!templates/sign_up',
  'views/alerts'
  ], function($, Backbone, signUpTemplate, AlertsView){
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
        $.post('users', userData).success(function(data){
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