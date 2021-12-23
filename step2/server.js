import Fastify from 'fastify';
import Chance from 'chance';

const fastify = Fastify({
   logger: true
});
const chance = Chance();
const port = process.env.PORT;

fastify.get('/', (request, reply) => {
   reply.send(generate());
});

const start = async () => {
   try {
     await fastify.listen(port, '0.0.0.0')
   } catch (err) {
     fastify.log.error(err)
     process.exit(1)
   }
 }

function generate() {

	var numberOfPlanes = chance.integer({
		min: 0,
		max: 10
	});
	console.log(numberOfPlanes);
	var planes = [];
	for (var i = 0; i < numberOfPlanes; ++i) {
	
		var airline = "United";
		var callsign = airline.toUpperCase() + chance.integer({min:1, max:45});
		var flightId = chance.hash({length: 6, casing: 'upper'})
		var currentCoords = chance.coordinates();
		var currentTimeZone = chance.timezone();
		var pilot = chance.name();
		var licenseExpireDate = chance.year({min: 2005, max: 2035});
		
		planes.push({
			airline: airline,
			callsign: callsign,
			flightId: flightId,
			currentCoords: currentCoords,
			currentTimeZone: currentTimeZone,
			pilot: pilot,
			licenseExpireDate: licenseExpireDate
		});
		
	};
	console.log(planes);
	return planes;
}


start()