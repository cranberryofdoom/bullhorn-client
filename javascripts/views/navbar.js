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

    CurrentUser.on("change", function() {
      console.log("CHANGED");
      // FUCK YOU JAVASCRIPT!!!
      // Do not remove this if statement, becuase if you do the code will break
      // because fuck javascript and requirejs.
      if (NavbarView !== undefined) {
        var navbarView = new NavbarView();
        navbarView.render();
      } else {
        console.log("NavbarView was undefined goddammitttt!!!!!");
      }
    });
    return NavbarView;
  });