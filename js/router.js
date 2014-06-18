Counters.Router.map(function() {
  this.resource('counters', { path: '/' });
});

Counters.CountersRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('counter');
	}
});