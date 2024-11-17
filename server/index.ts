import { server } from './src/config/server';
import 'dotenv/config';

const port = process.env.PORT;

server.listen(port || 3000, () => {
    console.log("Listening on port " + port);
})