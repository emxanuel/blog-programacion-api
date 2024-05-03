import { addComment, removeComment, updateComment, getComments } from "../models/courses.model.js";

export const getComments = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await getComments(id);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addCourseComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = req.body;
        const course = await addComment(id, comment);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateCourseComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = req.body;
        const course = await updateComment(id, comment);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const removeCourseComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = req.body;
        const course = await removeComment(id, comment);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}