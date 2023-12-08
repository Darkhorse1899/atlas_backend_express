import { Router } from "express";
import upload from "../upload";
import model from "../model/newsletter.model";
import subscriber from "../model/subscriber.model";
import { sendHTMLEmail } from "../utils/nodeMailer";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find());
});

router.post("/", upload.single("image"), async (req, res) => {
  const newsletter = await model.create({
    ...req.body,
    image: req.file.filename,
    created_at: new Date(),
  });
  return res.json({ status: 200, newsletter });
});

router.post("/subscribe/:id", async (req, res) => {
  const { id } = req.params;
  const newsletter = await model.findById(id);
  if (!newsletter) {
    return res.json({ status: 404, exist: false });
  }
  const emails = await (await subscriber.find()).map((item) => item.email);
  sendHTMLEmail(
    "Newsletter Contact",
    `<img src='${newsletter.image}' />
  <p>${newsletter.content}</p>`,
    emails
  );
});

export default router;
