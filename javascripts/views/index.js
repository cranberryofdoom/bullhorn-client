define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/index',
  'modules/current_user'
  ], function($, _, Backbone, indexTemplate, CurrentUser){
    var IndexView = Backbone.View.extend({
      el: $('#container'),
      initialize: function(){
        this.render();
      },
      render: function(){
        var currentUser = CurrentUser.get();
        if (currentUser !== null) {
          this.$el.html(indexTemplate({currentUser: currentUser.attributes}));
        } else {
          this.$el.html(indexTemplate());
        }
      }
    });
    return IndexView;
  });