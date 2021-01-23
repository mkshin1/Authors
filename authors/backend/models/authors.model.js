const mongoose = require("mongoose")

const favAuthorSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [
                true,
                "First name is required"
            ],
            unique: true,
            trim: true,
            minlength: [
                3,
                "First name must be 3 characters long"
            ]
        },
        lastName: {
            type: String,
            required: [
                true,
                "Last name is required"
            ],
            unique: true,
            trim: true,
            minlength: [
                3,
                "Last name must be 3 characters long"
            ]
        },
        likes: {
            type:Number,
            min: 1

        }    
    }, { timestamps: true });

const favAuthor = mongoose.model("favAuthor-schema", favAuthorSchema)

module.exports = favAuthor
