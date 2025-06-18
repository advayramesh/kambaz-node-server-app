import * as dao from "./dao.js";
import * as moduleDao from "../Modules/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import * as usersDao from "../Users/dao.js";
import * as modulesDao from "../Modules/dao.js";
export default function CourseRoutes(app) {

  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = moduleDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.get("/api/courses/:cid/users", async (req, res) => {
    const users = await enrollmentsDao.findUsersForCourse(req.params.cid);
    res.json(users);
  });

  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });

  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  });

  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();  
    res.json(courses); 
  });

  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();  
    res.json(courses);                           
  });


  app.get("/api/courses/:courseId/people", (req, res) => {
    const { courseId } = req.params;
    const course = dao.findCourseById(courseId).find((c) => c._id == courseId);
    const users = usersDao.findAllUsers();
    const people = users.filter((user) => user.section === course.section);
    res.send(people);
  });

  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  });

  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const module = { ...req.body, course: courseId };
    const newModule = await modulesDao.createModule(module);
    res.send(newModule);
  });

}
