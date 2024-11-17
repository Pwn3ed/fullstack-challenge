import express from 'express';
import router from '../v1/routes';

const server = express();


server.use(express.json());

server.use(router);


export { server };