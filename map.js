var map;
var coords = {lat: 41.389406, lng: 2.113307};

function initMap() {
	var mapOptions = {
		center: new google.maps.LatLng(coords.lat, coords.lng),
		zoom: 16
	};
	console.log(mapOptions);

	map = new google.maps.Map(document.getElementById("map"),
								mapOptions);

	var marker = new google.maps.Marker({
		position: coords,
		map: map,
		title: 'Hello world'
	});
}
