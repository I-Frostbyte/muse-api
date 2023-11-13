import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const PlannerSchema = new mongoose.Schema({
    plannerName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,

    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }]
}, {
    timestamps: true, toJSON: { virtuals: true}, toObject: { virtuals: true }
});

PlannerSchema.plugin(uniqueValidator, {
    message: "{PATH} {VALUE} is already in use, please try another",
});

const Planner = mongoose.model("Planner", PlannerSchema);

export default Planner;