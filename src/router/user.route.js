import {Router} from "express"
import userModel from "../model/user.model"
import {hashSync, compareSync} from "bcrypt"

const router = Router();

router.post("/login", async (req, res) => {
    return compareSync(req.body.password, userModel.findOne({username: req.body.username}).password);
});

router.post("/register", async(req, res) => {
    return userModel.create({...req.body, password: hashSync(req.body.password, 10)});
})

export default router;