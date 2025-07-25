import { server } from './src/config/server';
import 'dotenv/config';
import { citySeeds } from './src/seeds/citySeeds';
import { dropAll } from './src/seeds/dropAll';
import { personSeeds } from './src/seeds/personSeed';

const port = process.env.PORT;

server.listen(port || 3000, () => {
    console.log("Listening on port " + port);
})



// DEBUG:

// IF FIRST TIME RUNNING:
// citySeeds();
// personSeeds();

// TO CLEAR DATABASE:
// dropAll(); 
