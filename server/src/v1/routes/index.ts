import { Router } from "express";

const router = Router();


router.get('/', (req, res) => {
    res.send("Starting page");
});

router.get('/test', (req, res) => {
    res.send("Hey!");
});


router.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.status(400).json("Cars");
});



export default router;