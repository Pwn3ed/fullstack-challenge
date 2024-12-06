import { Router, Request, Response } from "express";


export const router = Router();


router.get('/', (req: Request, res: Response) => {
    res.send("Start Page!");
});


export { router as cityRoutes } from "./city.routes";
export { router as personRoutes } from "./person.routes";
