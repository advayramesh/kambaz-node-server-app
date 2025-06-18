import Database from "../Database/index.js";
export function findModulesForCourse(courseId) {
  const { modules } = Database;
  return modules.filter((module) => module.course === courseId);
}
   


  export function updateModule(module) {
    return model.updateOne({ _id: module._id }, { $set: module });
  }

  export function createModule(module) {
    return model.create(module);
  }
  

export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
}
  
  
