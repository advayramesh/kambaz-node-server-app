import express from "express";
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import mongoose from "mongoose";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz";

mongoose.connect(CONNECTION_STRING);
//process.env.NETLIFY_URL || "https://a5--phenomenal-sable-ed932d.netlify.app"

const app = express();
app.use(
  cors({
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
    secure: process.env.NODE_ENV !== "development",
  },
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
}
app.use(session(sessionOptions));
Lab5(app);
CourseRoutes(app);
UserRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
