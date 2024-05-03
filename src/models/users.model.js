import mongoose from "mongoose";

export const UsuarioSchemma = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your name"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter your lastname"],
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
    },
    email: {
        type: String,
        required: [true, "Please enter the Email"],
    },
    finishedClasses: {
        type: Array,
        required: [true, "Please enter the finished clases"],
    },
    role: {
        type: String,
        required: [true, "Please enter the role"],
    },
});

export const Usuario = mongoose.model("usuario", UsuarioSchemma);
