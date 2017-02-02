var app = app || {};

app.europeanFlowers = Backbone.Collection.extend({
	model: app.singleFlower
});

// app.stateFlowers = Backbone.Collection.extend({
// 	model: app.singleFlower
// })
