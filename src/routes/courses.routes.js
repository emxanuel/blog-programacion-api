import { addCourseComment, updateCourseComment, removeCourseComment } from "../controllers/courses.js";
import { Router } from "express";

const coursesRouter = Router();

coursesRouter.get("/:id/comments", getComments);
coursesRouter.post("/:id/comments", addCourseComment);
coursesRouter.put("/:id/comments", updateCourseComment);
coursesRouter.delete("/:id/comments", removeCourseComment);

export default coursesRouter;