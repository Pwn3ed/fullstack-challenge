import { Server } from './server/Server'

const port = process.env.PORT;

Server.listen(port, () => {
    console.log("Listening on port " + port);
});