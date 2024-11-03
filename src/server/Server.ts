import express from 'express';
import 'dotenv/config';

const Server = express();


Server.get('/', (req, res) => {
    res.send("Hey!");
});


export { Server };