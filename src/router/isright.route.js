import { Router } from "express";
import model from "../model/isright.model";
import csv from "csv-express";
const router = Router();

router.get("/", async (req, res) => {
  res.send(await model.find({}));
});

router.post("/", async (req, res) => {
  const { email, likeItems, dislikeItems, distinction } = req.body;

  const likeItemsArray = JSON.parse(likeItems);
  const disItemsArray = JSON.parse(dislikeItems);

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
    subject: "Atlas Contact - Is atlas right for our child?",
    text: `
      email: ${email}
      Are any of the following not being met at your child's current school? (choose all that apply)
      ${disItemsArray.map((item) => `${item}<br />`)}
      Which result do you value the most at end of the semester and/or school year that presently not being met by your present school?
      ${distinction}
      Would You Like
      ${likeItemsArray.map((item) => `${item}<br />`)}
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
