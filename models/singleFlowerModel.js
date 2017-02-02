var app = app || {};

app.singleFlower = Backbone.Model.extend({
	defaults: {
		color: 'pink',
		img: 'images/placeholder.jpg'
	},

	initialize: function(){
		this.on('change', function(){
			console.log("The " + this.get('name') + 'has been changed ');
		})
	}
});

