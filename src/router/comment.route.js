import { Router } from "express";
import model from "../model/comment.model";

const router = Router();

router.get("/", async (req, res) => {
  if (req.query.latest == "true")
    res.send(await model.find().sort({ date: -1 }).limit(3));
  else res.send(await model.find({ parent: req.query.parent }));
});

router.post("/", async (req, res) => {
  res.send(await model.create({ ...req.body, date: new Date() }));
});

export default router;
