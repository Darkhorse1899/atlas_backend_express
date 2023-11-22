import { Router } from "express";
import model from "../model/page.model";

const router = Router();

router.get("/", async (req, res) => {
  return await model.findOne({ pagename: req.query.pagename });
});

router.post("/", async (req, res) => {
  let a = await model.findOne({ pagename: req.query.pagename });
  if (!a) a = await model.create({ pagename: req.query.pagename, detail: {} });

  a.detail = { ...a.detail, ...req.body };
  res.send(await a.save());
});

export default router;
