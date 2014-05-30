define([
  'jquery',
  'underscore',
  'backbone',
  'hbars!index_view'
], function($, _, Backbone, index_view){
  var IndexView = Backbone.View.extend({
    el: $('#container'),
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.html(template({message: 'hello'}));
    }
  });
  return IndexView;
});