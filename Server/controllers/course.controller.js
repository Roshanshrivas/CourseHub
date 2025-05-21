import { Course } from "../models/course.model.js";

export const createCourse = async (req, res) => {
  try {
    const {courseTitle, category} = req.body;
    if(!courseTitle || !category) {
      return res.status(400).json({
        success: false,
        message: "Course title and category are required",
      });
    }

    const course = await Course.create({
        courseTitle,
        category,
        creator: req.id,
    });
    return res.status(201).json({
      success: true,
      course,
      message: "Course created successfully",
    });

  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getPublishedCourse = async (_, res) => {
    try {
        const courses = await Course.find({ isPublished: true });
        if (!courses) {
            return res.status(404).json({
                success: false,
                message: "No published courses found",
            });
        }

        return res.status(200).json({
            success: true,
            courses,
        });

    } catch (error) {
        console.error("Error fetching published courses:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create course",
        });
    }
}



export const getCreatorCourses = async (req, res) => {
    try {
        const userId = req.id;
        const courses = await Course.find({ creator: userId });
        if(!courses){
            return res.status(404).json({
                success: false,
                message: "No courses found for this creator",
                courses: [],
            });
        }

        return res.status(200).json({
            success: true,
            courses,
        });

    } catch (error) {
        console.error("Error fetching creator courses:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch creator courses",
        });
    }
}
