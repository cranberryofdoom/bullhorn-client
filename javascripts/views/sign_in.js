define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/sign_in'
  ], function($, _, Backbone, signInTemplate){
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
        $.post('sessions', credentials).done(function(data){
          console.log(data);
        }).fail(function(data){
          console.log(data);
        });
        return false;
      }
    });
    return SignInView;
  });