var redFlower = new app.singleFlower({
	name: 'rose',
	img: 'https://github.com/sarahkwak/CardGame/blob/master/cardpack/10_of_spades.png',
	price: 7,
	state: 'California',
	originality: 'USA'
});

var orangeFlower = new app.singleFlower({
	name: 'sunflower',
	img: 'https://github.com/sarahkwak/CardGame/blob/master/cardpack/10_of_spades.png',
	price: 5,
	state: 'Utah',
	originality: 'USA'
});

var purpleFlower = new app.singleFlower({
	name: 'lily',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'purpleflower',
	price: 10,
	originality: 'Sweden'
});

var pinkFlower = new app.singleFlower({
	name: 'rose',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'pinkflower',
	price: 19,
	originality: 'Korea'
});

var whiteFlower = new app.singleFlower({
	name: 'tulip',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'whiteflower',
	price: 2,
	originality: 'Holland'
});

var tantalizingTulips = new app.singleFlower({
	name: 'Tantalizing Tulip',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'tantalizingtulips',
	price: 44,
	color: 'pink',
	originCountry: 'Holland'
});

var fleur_de_lis = new app.singleFlower({
	name: 'Fleur de lis',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'fleurdelis',
	price: 32,
	color: 'yellow',
	originCountry: 'Holland'
});

var flowerGroup = new app.europeanFlowers([
	tantalizingTulips, fleur_de_lis, whiteFlower, pinkFlower
])

// var stateFlowers = new app.stateFlowers([
// 	redFlower, orangeFlower
// ])


var flowerGroupView = new app.allFlowersView({ collection: flowerGroup });
$('#allFlowers').html(flowerGroupView.render().el);

var flowerRouter = new app.routes();
Backbone.history.start();
// var stateFlowerGroupView = new app.allFlowersView({ collection: stateFlowers });
// $('#stateFlowers').html( stateFlowerGroupView.render().el);

