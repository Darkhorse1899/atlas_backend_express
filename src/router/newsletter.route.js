import { Router } from "express";
import model from "../model/newsletter.model";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find());
});

router.post("/", async (req, res) => {
  const newsletter = await model.create({
    ...req.body,
    created_at: new Date(),
  });
  return res.json({ status: 200, newsletter });
});

export default router;
