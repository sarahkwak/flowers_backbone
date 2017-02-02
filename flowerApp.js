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

whiteFlower.set({price: 22});

var flowerGroup = new app.FlowersCollection([
	redFlower, orangeFlower, purpleFlower
])

flowerGroup.add([
	whiteFlower
]);

console.log(flowerGroup.toJSON());