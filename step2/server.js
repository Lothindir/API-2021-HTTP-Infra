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
   let pilotsNumber = chance.natural({ min: 5, max: 50 });
   let pilots = [];
   for (let i = 0; i < pilotsNumber; i++){
      let family = [];
      let familyMembers = chance.natural({ min: 1, max: 5 });
      for (let j = 0; j < familyMembers; j++){
         let familyMember = {
            name: chance.first(),
            age: chance.age(),
         };
         family.push(familyMember);
      }
      let pilot = {
         name: chance.name(),
         age: chance.age({ type: 'adult' }),
         callSign: chance.radio(),
         favoriteAnimal: chance.animal(),
         family: family,
      }
      pilots.push(pilot);
   }
   return pilots;
}

start()