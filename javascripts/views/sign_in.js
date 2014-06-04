define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/index',
  'hbs!templates/sign_in',
  'hbs!templates/alert'
  ], function($, _, Backbone, AppRouter, Index, signInTemplate, alertTemplate){
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
        var credentials = $(ev.currentTarget).serializeObject();
        view = this;
        $.post('sessions', credentials).done(function(data){
          data.alertType = 'success';
          view.$el.prepend(alertTemplate(data));
        }).fail(function(data){
          switch(data.status){
            case 400:
            case 403:
            data.alertType = 'danger';
            view.$el.prepend(alertTemplate(data));
            break;
            case 401:
            var appRouter = new AppRouter();
            appRouter.navigate('', {trigger: true});
            break;
          }
          
        });
        return false;
      }
    });
    return SignInView;
  });