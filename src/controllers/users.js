import { Usuario } from "@/models/users.model.js";
import hash from "@/utils/hash.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Usuario.findOne({
            email: email,
            password: hash(password),
        });
        if (user) {
            const token = jwt.sign({ id: user._id, firstName: user.firstName, lastName: user.LastName }, process.env.AUTH_SECRET);
            res.status(200).json({ user, token });
        } else {
            res.status(401).json({ message: false });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const register = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        const User = await Usuario.create({
            firstName,
            lastName,
            email,
            password: hash(password),
            finishedClasses: [],
            role: "user"
        });

        res.status(200).json({ User });
    } catch (error) {
        switch(error.code){
            case 11000:
                res.status(500).json({ message: "Este correo ya está registrado" });
                break;
            default:
                res.status(500).json({ message: error.message });
        }
    }
}

export const addClassToUser = async (req, res) => {
    try {
        const { id } = req.params;
        const User = await Usuario.findByIdAndUpdate(id, req.body);

        if (!User) {
            return res.status(404).json({ message: "Usuario not found" });
        }
        const updateUser = await Usuario.findById(id);
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUsers = async (_, res) => {
    try {
        const User = await Usuario.find();
        res.status(200).json({ User });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}