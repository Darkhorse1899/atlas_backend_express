import { Router } from "express";
import userModel from "../model/user.model";
import { hashSync, compareSync } from "bcrypt";

const router = Router();

router.post("/login", async (req, res) => {
  const user = await userModel.findOne({ username: req.body.username });
  if(!user) res.send(0);
    res.send(compareSync(req.body.password, user.password));
});

router.post("/register", async (req, res) => {
  res.send(userModel.create({
    ...req.body,
    password: hashSync(req.body.password, 10),
  }));
});

export default router;
