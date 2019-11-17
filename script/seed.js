'use strict';

const db = require('../server/db');
const {
  User,
  Location,
  UserLocInput,
  Service
} = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.bulkCreate([
      {
        username: 'treehugger',
        email: 'lovelife@email.com',
        password: '123'
      },
      {
        username: 'fluttershy',
        email: 'shyguy@email.com',
        password: 'YouWillLoveMe'
      },
      {
        username: 'cyclonaut',
        email: 'spaceman@email.com',
        password: 'Blackhole5'
      },
      {
        username: 'johnnyboy',
        email: 'johnny_boy@email.com',
        password: 'qwerty'
      },
      {
        username: 'jane_doe',
        email: 'manelane@email.com',
        password: 'SupahTroopah'
      }
    ])
  ]);

  const locations = await Promise.all([
    Location.bulkCreate([
      {
        latitude: 40.715073,
        longitude: -74.019156
      },
      {
        latitude: 40.725073,
        longitude: -74.029156
      },
      {
        latitude: 40.735073,
        longitude: -74.039156
      },
      {
        latitude: 40.745073,
        longitude: -74.049156
      },
      {
        latitude: 40.755073,
        longitude: -74.059156
      },
      {
        latitude: 40.765073,
        longitude: -74.069156
      },
      {
        latitude: 40.775073,
        longitude: -74.079156
      },
      {
        latitude: 40.785073,
        longitude: -74.089156
      },
      {
        latitude: 40.795073,
        longitude: -74.099156
      },
      {
        latitude: 40.815073,
        longitude: -74.119156
      }
    ])
  ]);

  const userLocInputs = await Promise.all([
    UserLocInput.bulkCreate([
      {
        userId: 1,
        locationId: 1
      },
      {
        userId: 2,
        locationId: 1
      },
      {
        userId: 4,
        locationId: 3
      },
      {
        userId: 5,
        locationId: 6
      },
      {
        userId: 1,
        locationId: 3
      }
    ])
  ]);

  const services = await Promise.all([
    Service.bulkCreate([
      {
        category: 'Cans'
      },
      {
        category: 'Soft Plastic'
      },
      {
        category: 'Hard Plastic'
      },
      {
        category: 'Glass'
      },
      {
        category: 'Paper'
      },
      {
        category: 'Cardboard'
      },
      {
        category: 'Organics'
      },
      {
        category: 'Batteries'
      },
      {
        category: 'Scrap Metal'
      }
    ])
  ]);

  console.log(`seeded ${users[0].length} users`);
  console.log(`seeded ${locations[0].length} locations`);
  console.log(`seeded ${userLocInputs[0].length} user location inputs`);
  console.log(`seeded ${services[0].length} services`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection CLOSED');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
