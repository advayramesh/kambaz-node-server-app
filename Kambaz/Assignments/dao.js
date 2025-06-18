import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createAssignment(assignment) {
  return model.create(assignment);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.findByIdAndUpdate(assignmentId, assignmentUpdates, { new: true });
}

export function deleteAssignment(assignmentId) {
  return model.findByIdAndDelete(assignmentId);
}

export function findAssignmentById(id) {
  return model.findById(id);
}
