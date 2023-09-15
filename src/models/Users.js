import mongoose from "mongoose";

// a schema is a object used to define the structure of our data
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // savedRecipes: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "recipes"
    // }]
});
                                 //collection   ,  Schema
export const UserModel = mongoose.model("users", UserSchema);