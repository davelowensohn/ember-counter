Counters.CountersController = Ember.ArrayController.extend({
  actions: {
    createCounter: function() {
      // Get the counter title set by the "New Counter" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Counter model
      var counter = this.store.createRecord('counter', {
        title: title,
        isGood: true
      });

      // Clear the "New Counter" text field
      this.set('newTitle', '');

      // Save the new model
      counter.save();
    }
  }
});
