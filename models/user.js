const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

//Create a schema
const userSchema = new Schema({
    email:{
        type: String,   
        required: true,
        unique: true,
        lowercase: true
    }, 
    password: {
        type: String,   
        required: true,
    } 
});

userSchema.pre("save", async function (next) {
    try {

        //Generate a salt
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(this.password, salt);
        console.log("salt", salt);
        console.log("normal password", this.password);
        console.log("hashed password", passwordHash);
    } catch (error) {
        next(error);
    }
});

//Create a model
const User = mongoose.model("user", userSchema);


//Export the model
module.exports = User;
