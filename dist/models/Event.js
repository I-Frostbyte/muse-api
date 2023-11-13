"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const EventSchema = new mongoose_1.default.Schema({
    title: String,
    venue: String,
    date: String,
    tickets: String,
}, {
    timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }
});
EventSchema.plugin(mongoose_unique_validator_1.default, {
    message: "{PATH} {VALUE} is already in use, please try another",
});
EventSchema.virtual("artistes", {
    ref: "Artiste",
    foreignField: "events",
    localField: "_id",
});
EventSchema.virtual("planners", {
    ref: "Planner",
    foreignField: "events",
    localField: "_id",
});
const Event = mongoose_1.default.model("Event", EventSchema);
exports.default = Event;
