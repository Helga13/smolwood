if(document.getElementById('map')){
	
    var map;
			function initMap() {
				
				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: 53.9036759, lng: 27.5507981},
					zoom: 12,
					disableDefaultUI: true,
        	scrollwheel: false
				});
			}
	initMap();
}