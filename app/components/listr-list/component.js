import Ember from 'ember';

export default Ember.Component.extend({
// ember magic --> translates camel to kebob case (css)
  classNameBindings: ['listDetailHidden'],
// false as default state
  listDetailHidden: false,
  actions: {
    toggleListDetail(){
      return this.toggleProperty('listDetailHidden');
    },
  },
});
