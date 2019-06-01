const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        min: [3, "Minimun of 3 characters required"],
        max: 20
    },
    email: {
        type: String,
        trim: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        unique: true,
        min: 7,
        max: 50,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: [
            function(input) {
              return input.length >= 8;
            },
            "Password should be a minimum of 8 characters."
            ]
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    SignUpDate: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model("User", UserSchema);

// Export the Example model
module.exports = User;