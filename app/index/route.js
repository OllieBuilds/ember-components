import Ember from 'ember';

export default Ember.Route.extend({
  // syntactic sugar for model: function() {}
  model () {
    return [
      {
        title: 'Favorite Things',
        items: [
          { content: 'Cats'},
          { content: 'Dogs'},
          { content: 'Cthulu'},
          { content: 'Scotch'}
        ]
      },{
        title: 'To Do',
        items: [
          { content: 'Learn Javascript'},
          { content: 'Learn Ember'},
          { content: 'Learn Express'}
        ]
      }
    ];
  },
});
