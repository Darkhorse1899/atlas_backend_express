import { Router } from "express";
import model from "../model/event.model";
import csv from "csv-express";
const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find());
});

router.post("/", async (req, res) => {
  res.send(await model.create(req.body));
});
router.get("/file", async (req, res) => {
  let a = await model.find({});
  a = JSON.parse(JSON.stringify(a));
  res.csv(a, true);
});
export default router;
