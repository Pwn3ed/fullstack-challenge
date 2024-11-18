import { Router, Request, Response } from 'express'


export const router = Router();


router.get('/cities', (req: Request, res: Response) => {
    
});

router.post('/city', (req: Request, res: Response) => {

});


router.get('/city/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(400).json("City: "+id);
});

router.put('/city/:id', (req: Request, res: Response) => {

});

router.delete('/city/:id', (req: Request, res: Response) => {

});
