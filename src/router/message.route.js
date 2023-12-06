import { Router } from "express";
import model from "../model/message.model";
import nodemailer from "nodemailer";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find({}));
});

router.post("/", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
      user: "babeengineer@outlook.com",
      pass: "Notepad++",
    },
  });

  var mailOptions = {
    from: "babeengineer@outlook.com",
    to: [
      "kevin@atlasstudios.com",
      "hello@atlassacademics.com",
      "edwardschwartz1108@gmail.com",
    ],
    subject: "Sending Email using Node.js",
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send(await model.create(req.body));
});

router.post("/view", async (req, res) => {
  res.send(await model.findByIdAndUpdate(req.query.id, { isview: true }));
});

export default router;
