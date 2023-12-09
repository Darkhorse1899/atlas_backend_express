import { Router } from "express";
import userModel from "../model/user.model";
import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();
const secret_key = process.env.JWT_SECRET || "123456";
const expiresIn = process.env.JWT_EXPIRES_IN || 7 * 24 * 3600;

router.post("/login", async (req, res) => {
  const { token } = req.body;
  if (token) {
    const decodedUser = await jwt.verify(token, secret_key);
    if (!decodedUser) {
      return res.json({ status: 401 });
    }
    const exist = await userModel.findById(decodedUser.id);
    if (!exist) {
      return res.json({ status: 401 });
    }
    return res.json({ status: 200 });
  }

  const user = await userModel.findOne({ username: req.body.username });
  if (!user) res.json({ status: 404 });

  const isSame = compareSync(req.body.password, user.password);
  if (isSame) {
    const token = jwt.sign({ id: user._id, iat: Date.now() }, secret_key, {
      expiresIn,
    });
    return res.json({ status: 200, token });
  } else {
    return res.json({ status: 404 });
  }
});

// router.post("/register", async (req, res) => {
//   res.send(
//     userModel.create({
//       ...req.body,
//       password: hashSync(req.body.password, 10),
//     })
//   );
// });

export default router;
