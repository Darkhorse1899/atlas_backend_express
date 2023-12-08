import { Router } from "express";
import model from "../model/newsletter.model";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find());
});

router.post("/", async (req, res) => {
  const { period } = req.body;
  const newsletter = await model.create({ period, created_at: new Date() });
  return res.json({ status: 200, newsletter });
});

export default router;
