define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/navbar',
  'modules/current_user'
  ], function($, _, Backbone, navbarTemplate, CurrentUser){
    var NavBarView = Backbone.View.extend({
      el: $('#navbar'),
      render: function(){
        this.$el.html(navbarTemplate({currentUser: CurrentUser.attributes()}));
      }
    });
    return NavBarView;
  });