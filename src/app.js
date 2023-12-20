import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

//ye sb packages configure app bnne ke baad hote hai, tbhi to app.use(), app.get() kr paenge
const app = express();

app.use(
  cors({
    //ki kon konse origin allow kre hai humne
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); //configured

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
export default { app };
