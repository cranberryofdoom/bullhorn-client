define([
  'jquery',
  'backbone',
  'hbs!templates/forgot_password',
  'views/alerts',
  'modules/current_user'
  ], function($, Backbone, forgotPasswordTemplate, AlertsView, CurrentUser){
    var forgotPasswordView = Backbone.View.extend({
      el: $('#container'),
      events: {
        'submit #form-forgot-password': 'submitForm'
      },
      render: function(){
        this.$el.html(forgotPasswordTemplate());
      },
      submitForm: function(ev){
        var formData = $(ev.currentTarget).serializeObject();
        view = this;
        $.post('reset_password/send', formData).success(function(data){
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
    return forgotPasswordView;
  });