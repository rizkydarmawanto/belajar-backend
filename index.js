import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = Express();
mongoose.connect("mongodb://localhost:27017/fullstack_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected..."));

app.use(cors());
app.use(Express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("server up and running..."));
