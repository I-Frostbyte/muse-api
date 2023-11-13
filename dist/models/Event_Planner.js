"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const PlannerSchema = new mongoose_1.default.Schema({
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Event"
        }]
}, {
    timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }
});
PlannerSchema.plugin(mongoose_unique_validator_1.default, {
    message: "{PATH} {VALUE} is already in use, please try another",
});
// PlannerSchema.pre("findOne", function(next) {
//     this.populate('events');
// })
const Planner = mongoose_1.default.model("Planner", PlannerSchema);
exports.default = Planner;
