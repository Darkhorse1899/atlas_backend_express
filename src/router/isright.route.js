import { Router } from "express";
import model from "../model/isright.model";
import csv from "csv-express";
import nodemailer from "nodemailer";
const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find({}));
});

router.post("/", async (req, res) => {
  const { email, likeItems, dislikeItems, distinction } = req.body;

  const likeArray = JSON.parse(likeItems);
  const dislikeArray = JSON.parse(dislikeItems);

  var transporter = nodemailer.createTransport({
    service: "Gmail",
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
      email: ${email}

      Are any of the following not being met at your child's current school? (choose all that apply)
      
      ${dislikeArray.reduce(
        (tot, item) => `${tot}
      ${item}`,
        ""
      )}
      
      Which result do you value the most at end of the semester and/or school year that presently not being met by your present school?

      ${distinction}
      
      Would You Like

      ${likeArray.reduce(
        (tot, item) => `${tot}
      ${item}`,
        ""
      )}
    `,
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
router.get("/file", async (req, res) => {
  let a = await model.find({});
  a = JSON.parse(JSON.stringify(a));
  res.csv(a, true);
});
export default router;
