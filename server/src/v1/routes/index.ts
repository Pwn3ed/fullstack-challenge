import { Router, Request, Response } from "express";


export const router = Router();


router.get('/', (req: Request, res: Response) => {
    res.send("Start Page!");
});


export { router as citiesRouter } from "./cities.routes";
export { router as usersRoutes } from "./users.routes";