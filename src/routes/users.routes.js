import { Router } from "express";
import {
    login,
    register,
    addClassToUser,
    getUsers,
} from "@/controllers/users.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/Login", login);
usersRouter.post("/Register", register);
usersRouter.put("/Class/:id", addClassToUser);

export { usersRouter };