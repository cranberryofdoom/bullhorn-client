define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/navbar',
  'modules/current_user'
  ], function($, _, Backbone, navbarTemplate, CurrentUser){
    var NavbarView = Backbone.View.extend({
      el: $('#navbar'),
      render: function(){
        console.log("rendering navbar");
        this.$el.html(navbarTemplate({currentUser: CurrentUser.toJSON()}));
      }
    });
    return NavbarView;
  });