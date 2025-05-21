import express from 'express';
import { createCourse, getCreatorCourses, getPublishedCourse } from '../controllers/course.controller.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const router = express.Router();

router.route("/").post(isAuthenticated, createCourse);
router.route("/published-courses").get(getPublishedCourse);
router.route("/").get(isAuthenticated, getCreatorCourses);



export default router;