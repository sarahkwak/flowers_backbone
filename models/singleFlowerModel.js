var app = app || {};

app.singleFlower = Backbone.Model.extend({
	defaults: {
		color: 'pink'
	},

	initialize: function(){
		this.on('change', function(){
			console.log("The " + this.get('name') + 'has been changed ');
		})
	}
});

