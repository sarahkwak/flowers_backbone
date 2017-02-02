var app = app || {};

app.routes = Backbone.Router.extend({

	routes: {
		"": "noText",
		"purpleflower": "purpleflower",
		'pinkflower': "pinkflower",
		'whiteflower': "whiteflower",
		'tantalizingtulips': "tulips",
		'fleurdelis': "lis"
	},

	noText: function(){
		$('#copy').html("");
	},
	pinkflower: function(){
		$('#copy').text("This is pink flower");
	},
	whiteflower: function(){
		$('#copy').text("This is white flower");
	},
	tulips: function(){
		$('#copy').text("This is tantalizing tulips");
	},
	lis: function(){
		$('#copy').text("THis is Fleur de Lis");
	}
});
