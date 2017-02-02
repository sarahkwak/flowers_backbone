var redFlower = new app.singleFlower({
	name: 'rose',
	img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Fca%2F97%2F91%2Fca9791ad522c7f2b6e77c2cbd1e80665.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Ftjamay39%2Fflower-power%2F&docid=0lmtHovsiPF9WM&tbnid=7L12ZZfVNtw60M%3A&vet=1&w=1920&h=1080&bih=1343&biw=1718&q=flower%20images&ved=0ahUKEwi2g8LFs_LRAhUY0mMKHSsZCCIQMwh5KAgwCA&iact=mrc&uact=8',
	link: 'https://google.com',
	price: 7,
	originality: 'Canada'
});

var orangeFlower = new app.singleFlower({
	name: 'sunflower',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'https://google.com',
	price: 5,
	originality: 'France'
});

var purpleFlower = new app.singleFlower({
	name: 'lily',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'https://google.com',
	price: 10,
	originality: 'Sweden'
});

var pinkFlower = new app.singleFlower({
	name: 'rose',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'https://google.com',
	price: 19,
	originality: 'Korea'
});

var whiteFlower = new app.singleFlower({
	name: 'tulip',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'https://google.com',
	price: 2,
	originality: 'Holland',
	img: 'images/tulip.png'
});

var tantalizingTulips = new app.singleFlower({
	name: 'Tantalizing Tulip',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'https://google.com',
	price: 44,
	color: 'pink',
	originCountry: 'Holland'
});

var fleur_de_lis = new app.singleFlower({
	name: 'Fleur de lis',
	img: 'http://www.hvac2000.com/wp-content/uploads/2016/10/1477471597_Images-of-flowers.jpg',
	link: 'https://google.com',
	price: 32,
	color: 'yellow',
	originCountry: 'Holland'
});

var flowerGroup = new app.europeanFlowers([
	tantalizingTulips, fleur_de_lis
])

var flowerGroupView = new app.allFlowersView({ collection: flowerGroup });
$('#allFlowers').html(flowerGroupView.render().el);


