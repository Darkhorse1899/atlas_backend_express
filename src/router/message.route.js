import { Router } from "express";
import model from "../model/message.model";
import nodemailer from "nodemailer";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find({}));
});

router.post("/", async (req, res) => {
  const { email, name, class: _class, message, type } = req.body;

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
      "hello@atlasacademics.com",
      "smartrichard220@outlook.com",
    ],
    subject: "Atlas Contact",
  };

  if (type === "joining") {
    mailOptions.text = `
    name: ${name}
    email: ${email}
    class: ${_class}
    message: ${message}
    `;
  } else if (type === "spotting") {
    mailOptions.text = `
    name: ${name}
    email: ${email}
    phone: ${phone}
    message: ${message}
    `;
  } else {
    mailOptions.text = `
    name: ${name}
    email: ${email}
    message: ${message}
    `;
  }

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
