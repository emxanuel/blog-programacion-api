import { Usuario } from "@/models/users.model.js";
import hash from "@/utils/hash.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Espera a que la consulta a la base de datos se complete
        const user = await Usuario.findOne({
            Email: email,
            Password: hash(password),
        });
        // Si user tiene un valor (es decir, si se encontró un usuario)
        if (user) {
            res.status(200).json({ user });
        } else {
            // Si no se encontró un usuario
            res.status(200).json({ message: false });
        }
    } catch (error) {
        // Si ocurre algún error, envía un mensaje de error con un estado 500
        res.status(500).json({ message: error.message });
    }
}

export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const User = await Usuario.create({
            Name: name,
            Password: hash(password),
            Email: email,
        });

        res.status(200).json({ User });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addClassToUser = async (req, res) => {
    try {
        const { id } = req.params;
        const User = await Usuario.findByIdAndUpdate(id, req.body);

        if (!User) {
            return res.status(404).json({ message: " Usuario not found" });
        }
        const updateUser = await Usuario.findById(id);
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUsers = async (req, res) => {
    try {
        const User = await Usuario.find();

        res.status(200).json({ User });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}