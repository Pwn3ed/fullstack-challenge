import { Router } from "express";

const router = Router();


router.get('/', (req, res) => {
    res.send("Starting page");
});

router.get('/test', (req, res) => {
    res.send("Hey!");
});


router.post('/cars', (req, res) => {
    console.log(req.body);
    res.send("Cars");
});



export default router;