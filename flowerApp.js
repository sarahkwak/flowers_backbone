var redFlower = new app.singleFlower({
	name: 'rose',
	price: 7,
	originality: 'Canada'
});

var orangeFlower = new app.singleFlower({
	name: 'sunflower',
	price: 5,
	originality: 'France'
});

var purpleFlower = new app.singleFlower({
	name: 'lily',
	price: 10,
	originality: 'Sweden'
});

var pinkFlower = new app.singleFlower({
	name: 'rose',
	price: 19,
	originality: 'Korea'
});

var whiteFlower = new app.singleFlower({
	name: 'tulip',
	price: 2,
	originality: 'Holland',
	img: 'images/tulip.png'
});

var tantalizingTulips = new app.singleFlower({
	name: 'Tantalizing Tulip',
	price: 44,
	color: 'pink',
	originCountry: 'Holland'
});

var fleur_de_lis = new app.singleFlower({
	name: 'Fleur de lis',
	price: 32,
	color: 'yellow',
	originCountry: 'Holland'
});

var europeanFlowers = new app.europeanFlowers([
	tantalizingTulips, fleur_de_lis
])
tantalizingTulips.set({
	price: 22
})
fleur_de_lis.set('color', 'orange');
console.log(europeanFlowers.toJSON());