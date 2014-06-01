define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/index'
  ], function($, _, Backbone, indexTemplate){
    var IndexView = Backbone.View.extend({
      el: $('#container'),
      initialize: function(){
        this.render();
      },
      render: function(){
        this.$el.html(indexTemplate());
      }
    });
    return IndexView;
  });