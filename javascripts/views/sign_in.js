define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/sign_in'
  ], function($, _, Backbone, signInTemplate){
    var SignInView = Backbone.View.extend({
      el: $('#container'),
      initialize: function(){
        this.render();
      },
      render: function(){
        this.$el.html(signInTemplate());
      }
    });
    return SignInView;
  });