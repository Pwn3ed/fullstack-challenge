import { Router, Request, Response } from 'express'
import { createUser } from '../controllers/user.controller';

export const router = Router();


router.get('/users', (req: Request, res:Response) => {
    res.json("Users");
});

router.post('/user', createUser);

router.get('/user/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).json("User: "+id);
});

router.put('/user/:id', (req: Request, res: Response) => {

});

router.delete('/user/:id', (req: Request, res: Response) => {

});
