import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator"
import bcrypt from "bcrypt"

const ConsumerSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    consumerName: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }
    },
    username: {
        type: String,
        min: 2,
        max: 100,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        min: 2,
        max: 100,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }

})