import mongoose from "mongoose";

export const databaseConnect = (uri) => {
    mongoose
        .connect(
            uri
        )
        .then(() => {
            console.log("connected to database!");
        })
        .catch(() => {
            console.log("connection failed");
        });
};
