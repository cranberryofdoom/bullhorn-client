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
        this.$el.html(indexTemplate({currentUser: CurrentUser.attributes()}));
      }
    });
    return IndexView;
  });