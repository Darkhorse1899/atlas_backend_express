import { Router } from "express"
import model from "../model/message.model"


const router = Router()

router.get("/", async (req, res) => {
    res.send(model.find({}));
});

router.post("/", async (req, res) => {
    res.send(model.create(req.body));
})

export default router;