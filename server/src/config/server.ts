import express from 'express';
import { router, cityRoutes, personRoutes } from '../v1/routes';
import cors from 'cors';

const server = express();

//middlewares
server.use(cors());
server.use(express.json());


//routes
server.use(router);
server.use(cityRoutes);
server.use(personRoutes)


export { server };