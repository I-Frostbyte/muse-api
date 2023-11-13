"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artiste = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ArtisteSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'name field is required'],
    },
    phone: {
        type: String,
        required: [true, 'phone number field is required'],
    },
    genres: [{
            type: String,
        }],
    location: {
        type: String,
        required: [true, 'state field is required'],
    },
    imageUrl: {
        type: String,
        required: [true, 'imageUrl field is required'],
    },
    website: {
        type: String,
        required: false,
    },
    socialMediaLinks: [{
            type: String,
            required: false,
        }],
    events: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Event"
        }],
    availability: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
});
// ArtisteSchema.pre("findOne", function (next) {
// 	this.populate("events");
// 	next();
// })
exports.Artiste = mongoose_1.default.model('Artiste', ArtisteSchema);
