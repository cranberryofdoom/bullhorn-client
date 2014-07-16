define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/index',
  'modules/current_user',
  'views/alerts'
  ], function($, _, Backbone, indexTemplate, CurrentUser, AlertsView){
    var IndexView = Backbone.View.extend({
      el: $('#container'),
      events: {
        'submit form#form-create-list': 'createList'
      },
      render: function(){
        this.$el.html(indexTemplate({currentUser: CurrentUser.toJSON()}));
      },
      createList: function(ev){
        var listData = $(ev.currentTarget).serializeObject();
        $.post('lists', listData).success(function(data){
          alertsView = new AlertsView();
          alertsView.renderFromResponse(data);
        });
        return false;
      }
    });
    return IndexView;
  });