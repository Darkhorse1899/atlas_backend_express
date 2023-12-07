import { Router } from "express";
import csv from "csv-express";
import moment from "moment";
import nodemailer from "nodemailer";

import model from "../model/admission.model";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find({}));
});

router.post("/", async (req, res) => {
  const {
    student_first_name,
    student_last_name,
    birth_date,
    grade_level,
    parent_first_name,
    parent_last_name,
    email,
    phone_number,
    zipcode,
    about,
    fee_type,
  } = req.body;

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
    subject: "Atlas Contact - Is atlas right for our child?",
    text: `
    Student Name: ${student_first_name} ${student_last_name}
    Student Date of birth: ${moment(birth_date).format("MM/DD/YYYY")}
    Student Grade level 2023-2024: ${grade_level.join(",")}
    Parent Name: ${parent_first_name} ${parent_last_name}
    Email: ${email}
    Phone Number: ${phone_number}
    Zip Code: ${zipcode}
    About: ${about}
    Fee Type: ${fee_type}
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send(await model.create({ ...req.body, date: new Date() }));
});

router.get("/file", async (req, res) => {
  let a = await model.find({});
  a = JSON.parse(JSON.stringify(a));

  res.csv(a, true);
});

export default router;
