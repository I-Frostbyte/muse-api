"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAll_1 = __importDefault(require("../controllers/event/getAll"));
const getOne_1 = __importDefault(require("../controllers/event/getOne"));
const create_1 = __importDefault(require("../controllers/event/create"));
const update_1 = __importDefault(require("../controllers/event/update"));
const delete_1 = __importDefault(require("../controllers/event/delete"));
const router = express_1.default.Router();
// GET a single event
router.get("/:id", getOne_1.default);
// GET all events
router.get("/", getAll_1.default);
// CREATE a new event
router.post("/", create_1.default);
// UPDATE an event
router.patch("/:id", update_1.default);
// DELETE an event
router.delete("/:id", delete_1.default);
exports.default = router;
