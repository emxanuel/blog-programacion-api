import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    comments: {
        type: Array({ text, active, userId, username, date }),
        default: [],
    },
});

const Course = mongoose.model("Course", courseSchema);
export const getComments = async (id) => {
    try {
        const course = await Course.findById(id);
        return course.comments;
    } catch (error) {
        return error;
    }
}
export const addComment = async (id, comment) => {
    try {
        const course = await Course.findById(id);
        course.comments.push(comment);
        await course.save();
        return course;
    } catch (error) {
        return error;
    }
};

export const updateComment = async (id, comment) => {
    try {
        const course = await Course.findById(id);
        course.comments = course.comments.map((c) => {
            if (c.text === comment.text) {
                c.text = comment.text;
            }
            return c;
        });
        return course;
    } catch (error) {
        return error;
    }
};

export const removeComment = async (id, comment) => {
    try {
        const course = await Course.findById(id);
        course.comments = course.comments.map((c) => {
            if (c.text === comment.text) {
                c.active = false;
            }
            return c;
        });
        return course;
    } catch (error) {
        return error;
    }
};