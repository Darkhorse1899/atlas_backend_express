import express from "express";
import mongoose from "mongoose";
import messageRouter from "./router/message.route";
import isrightRouter from "./router/isright.route";
import newsRouter from "./router/news.route";
import commentRouter from "./router/comment.route";
import admissionRouter from "./router/admission.route";
import calendarRouter from "./router/calendar.route";
import eventRouter from "./router/event.route";
import userRouter from "./router/user.route";
import pageRouter from "./router/page.route";
import subscriberRouter from "./router/subscriber.route";
import newsLetterRouter from "./router/newsletter.route";
import { config } from "dotenv";

import cors from "cors";

config();

const app = express();
const PORT = process.env.PORT || 3003;

mongoose
  .connect(process.env.MONGODB_STR)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/message", messageRouter);
app.use("/api/isright", isrightRouter);
app.use("/api/news", newsRouter);
app.use("/api/comment", commentRouter);
app.use("/api/admission", admissionRouter);
app.use("/api/calendar", calendarRouter);
app.use("/api/event", eventRouter);
app.use("/api/user", userRouter);
app.use("/api/page", pageRouter);
app.use("/api/subscriber", subscriberRouter);
app.use("/api/newsletter", newsLetterRouter);

app.use("/api/files", express.static("./uploads"));

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err.message);
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});
