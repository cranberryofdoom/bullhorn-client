define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/index',
  'modules/current_user'
  ], function($, _, Backbone, indexTemplate, CurrentUser){
    var IndexView = Backbone.View.extend({
      el: $('#container'),
      render: function(){
        this.$el.html(indexTemplate({currentUser: CurrentUser.toJSON()}));
      }
    });
    return IndexView;
  });