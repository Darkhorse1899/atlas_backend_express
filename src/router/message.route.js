import { Router } from "express";
import model from "../model/message.model";
import nodemailer from "nodemailer";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find({}));
});

router.post("/", async (req, res) => {
  const { email, name, class: _class, phone, message, type } = req.body;

  var transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
      user: "babeengineer@outlook.com",
      pass: "Notepad++",
      // user: "admissions@atlasacademics.com",
      // pass: "Atlas2024",
    },
  });

  var mailOptions = {
    from: "babeengineer@outlook.com",
    // from: "admissions@atlasacademics.com",
    to: [
      "kevin@atlasstudios.com",
      "hello@atlasacademics.com",
      "smartrichard220@outlook.com",
      "lee19970108@gmail.com",
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

router.post("/delete/multiple", async (req, res) => {
  const ids = Object.values(JSON.parse(req.body.ids));

  const result = await Promise.all(
    ids.map(
      (id) =>
        new Promise(async (resolve) => {
          const removed = await model.deleteOne({ _id: id });
          resolve(removed);
        })
    )
  );

  if (result) {
    res.send("success");
  }
});

export default router;
