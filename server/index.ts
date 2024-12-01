import { server } from './src/config/server';
import 'dotenv/config';
import { User } from './src/seeds/userSeed'
import { City } from './src/seeds/citySeed';

const port = process.env.PORT;

server.listen(port || 3000, () => {
    console.log("Listening on port " + port);
})

User();
City();