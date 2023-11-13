"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const artiste_1 = __importDefault(require("./routes/artiste"));
const consumer_1 = __importDefault(require("./routes/consumer"));
const event_planner_1 = __importDefault(require("./routes/event_planner"));
const event_1 = __importDefault(require("./routes/event"));
//For env File
dotenv_1.default.config();
/*CONFIGURATION */
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/*ROUTES*/
app.use("/artistes", artiste_1.default);
app.use("/consumers", consumer_1.default);
app.use("/planners", event_planner_1.default);
app.use("/events", event_1.default);
/*MONGOOSE SETUP*/
const PORT = process.env.PORT || 8000;
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Fire at http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.log("====================================");
    console.log(`${error} did not connect`);
    console.log("====================================");
});
