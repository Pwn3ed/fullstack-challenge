import { server } from './src/config/server';
import 'dotenv/config';
import { userSeeds } from './src/seeds/userSeeds'
import { citySeeds } from './src/seeds/citySeeds';
import { dropAll } from './src/seeds/dropAll';
import { personSeeds } from './src/seeds/personSeed';

const port = process.env.PORT;

server.listen(port || 3000, () => {
    console.log("Listening on port " + port);
})

// dropAll();
// citySeeds();
// personSeeds();
// userSeeds();