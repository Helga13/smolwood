if(document.getElementById('map')){
	
    var map;
			function initMap() {
				
				var myLatLng = {lat: 53.9076675, lng: 27.5474748};
				
				map = new google.maps.Map(document.getElementById('map'), {
					center: myLatLng,
					zoom: 15,
//					disableDefaultUI: true,
        	scrollwheel: false
				});
				
				var marker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					title: 'пр Победителей, 7а, оф 32'
				});
			}
	initMap();
}    