const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/crossfit';

const client = new pg.Client(connectionString);
client.connect();
// workout table
// movement
// workout name
// created by:

// leaderboard:
// workout name
// athlete name
// score

// also an athlete table?

const query = client.query(
  `CREATE TABLE workout(
    id SERIAL PRIMARY KEY,
    workoutName VARCHAR(40) not null,
    movement BOOLEAN)

   CREATE TABLE leaderboard
   (id SERIAL PRIMARY KEY,
    workoutName VARCHAR(40) not null,
    atheletName BOOLEAN
    score )`);
query.on('end', () => {
  client.end();
});