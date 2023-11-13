import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator"
import bcrypt from 'bcrypt';

const EventSchema = new mongoose.Schema({
    title: String,
    Venue: String,
    Date: Date,
    Tickets: String,
}, {
    timestamps: true, toJSON: { virtuals: true}, toObject: { virtuals: true}
});

EventSchema.plugin(uniqueValidator, {
    message: "{PATH} {VALUE} is already in use, please try another",
});

EventSchema.virtual("artistes", {
    ref: "Artiste",
    foreignField: "events",
    localField: "_id",
})

const Event = mongoose.model("Event", EventSchema);

export default Event;