import { Router } from "express";
import model from "../model/calendar.model";

const router = Router();

router.get("/", async (req, res) => {
  const query = {},
    filter = {};
  //   if (req.query.date) {
  //     query.date = req.query.date;
  //   }
  if (req.query.from) {
    filter.$gte = new Date(req.query.from).toISOString();
  }
  if (req.query.to) {
    filter.$lte = new Date(req.query.to).toISOString();
  }
  if (Object.keys(filter).length > 0) {
    query.date = filter;
  }
  res.send(await model.find(query));
});

router.post("/", async (req, res) => {
  const schedule = await model.create({ ...req.body });
  res.send(schedule);
});

router.put("/:id", async (req, res) => {
  res.send(await model.findByIdAndUpdate(req.params.id, { ...req.body }));
});

export default router;
