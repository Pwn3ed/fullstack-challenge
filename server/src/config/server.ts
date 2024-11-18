import express from 'express';
import { router, usersRoutes, citiesRouter } from '../v1/routes';

const server = express();


server.use(express.json());


server.use(router);

server.use(usersRoutes);

server.use(citiesRouter);


export { server };