import {Router} from "express"
import model from "../model/event.model"

const router = Router()

router.get("/", async (req, res) => {
    res.send(await model.find());
})

router.post("/", async (req, res) => {
    res.send(await model.create(req.body));
})

export default router;