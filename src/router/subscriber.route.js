import { Router } from "express";
import model from "../model/subscriber.model";
import { sendHTMLEmail } from "../utils/nodeMailer";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find());
});

router.post("/", async (req, res) => {
  const { email } = req.body;
  const exist = await model.findOne({ email });
  if (exist) {
    return res.json({ status: 404, exist: true });
  }
  const subscriber = await model.create({ email });
  await sendHTMLEmail(
    "Newsletter Contact",
    `${email} has signed up successfully!`,
    [
      "kevin@atlasstudios.com",
      "hello@atlasacademics.com",
      "smartrichard220@outlook.com",
    ]
  );
  return res.json({ status: 200, subscriber });
});

export default router;
