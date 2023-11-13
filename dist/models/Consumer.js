"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// interface NameFields {
//     firstName: string,
//     lastName: string,
// }
// interface CandidateDocument extends Document {
//     // _id: mongoose.Types.ObjectId
//     consumerName: NameFields
//     username: string
//     email: string
//     password: string
//     phoneNumber: string
//     artisteIds: string[]
//     createdAt?: Date
//     updatedAt?: Date
// }
const ConsumerSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        min: 2,
        max: 100,
        required: true,
        // unique: true,
    },
    email: {
        type: String,
        min: 2,
        max: 100,
        required: true,
        // unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    artisteIds: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Artiste",
        },
    ],
}, {
    timestamps: true,
});
ConsumerSchema.plugin(mongoose_unique_validator_1.default, {
    message: "{PATH} {VALUE} is already in use, please try another",
});
ConsumerSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }
        const salt = await bcrypt_1.default.genSalt(10);
        const hashedPassword = await bcrypt_1.default.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    }
    catch (error) {
        return next(error);
    }
});
// ConsumerSchema.pre("save", async function (next) {
//   const consumer = this;
//   // Push the new followed artist into the followedArtists array
//   if (consumer.isModified('followedArtists') && consumer.artisteIds.length > 0) {
//     this.artisteIds.forEach((artisteId) => {
//       consumer.artisteIds.push(artisteId)
//     })
//     // consumer.artisteIds.push(consumer.artisteIds[0]);
//   }
//   next();
// })
const Consumer = mongoose_1.default.model("Consumer", ConsumerSchema);
exports.default = Consumer;
