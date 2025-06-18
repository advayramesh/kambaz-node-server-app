import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {

    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
      });

      app.delete("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const status = await dao.deleteModule(mid);
        res.send(status);
      });

      app.put("/api/modules/:mid", async (req, res) => {
        const module = req.body;
        const status = await dao.updateModule(module);
        res.send(status);
      });

      app.post("/api/courses/:courseId/modules", async (req, res) => {
        const { courseId } = req.params;
        const module = {
          ...req.body,
          course: courseId,
        };
        const newModule = await modulesDao.createModule(module);
        res.send(newModule);
      });

      app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const status = await dao.deleteModule(moduleId);
        res.send(status);
      });
 }
