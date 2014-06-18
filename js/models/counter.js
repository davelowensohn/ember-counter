Counters.Counter = DS.Model.extend({
  title: DS.attr('string'),
  taargus: DS.attr('number'),
  paargus: DS.attr('number'),
  isGood: DS.attr('boolean')
});

Counters.Counter.FIXTURES = [
{
	id: 1,
	title: 'Exercise',
	taargus: 4,
	paargus: 2,
	isGood: true
},
{
	id: 2,
	title: 'Sing songs',
	taargus: 5,
	paargus: 4,
	isGood: true
},
{
	id: 3,
	title: 'make sweet LOVE',
	taargus: 3,
	paargus: 6,
	isGood: true
},
{
	id: 4,
	title: 'Drink',
	taargus: 2,
	paargus: 2,
	isGood: false
},
{
	id: 5,
	title: 'kick dawgs',
	taargus: 0,
	paargus: 4,
	isGood: false
}
];