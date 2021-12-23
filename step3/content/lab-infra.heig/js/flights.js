$(function() {
	console.log("Loading flights...");
	
	function loadFlights() {
		$.getJSON("/api/json/", function( flights ) {
			console.log(flights);
			var message = "No flights recorded...";
			if (flights.length > 0) {
				message = flights[0].currentCoords;
			}
			$(".custom-name").text(message);
		});
	};
	loadFlights();
	setInterval(loadFlights, 2000);
});
