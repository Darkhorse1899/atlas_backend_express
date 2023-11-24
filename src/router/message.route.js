import { Router } from "express";
import model from "../model/message.model";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find({}));
});

router.post("/", async (req, res) => {
  res.send(await model.create(req.body));
});

router.post("/view", async (req, res) => {
    res.send(await model.findByIdAndUpdate(req.query.id, {isview: true}));
  });

export default router;
