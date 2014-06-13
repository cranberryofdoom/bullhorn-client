define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/navbar',
  'modules/current_user',
  'views/alerts'
  ], function($, _, Backbone, navbarTemplate, CurrentUser, AlertsView){
    var NavbarView = Backbone.View.extend({
      el: $('#navbar'),
      events: {
        'click #sign-out': 'signOutUser'
      },
      render: function(){
        this.$el.html(navbarTemplate({currentUser: CurrentUser.toJSON()}));
      },
      signOutUser: function(event) {
        alertsView = new AlertsView();
        $.ajax({
          url: "sessions",
          method: "DELETE"
        }).success(function(data) {
          CurrentUser.clear();
          if (Backbone.history.fragment === "") {
            // if you're already on the home page, force a re-render
            Backbone.history.loadUrl();
          } else {
            // else navigate to the home page
            Backbone.history.navigate('', {trigger: true});
          }
          alertsView.renderFromResponse(data);
        }).error(function(data) {
          alertsView.renderFromResponse(data);
        })
        return false
      }
    });

    CurrentUser.on("change", function() {
      var navbarView = new NavbarView();
      navbarView.render();
    });
    return NavbarView;
  });