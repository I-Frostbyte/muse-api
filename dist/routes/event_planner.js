"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAll_1 = __importDefault(require("../controllers/event_planner/getAll"));
const getOne_1 = __importDefault(require("../controllers/event_planner/getOne"));
const create_1 = __importDefault(require("../controllers/event_planner/create"));
const update_1 = __importDefault(require("../controllers/event_planner/update"));
const delete_1 = __importDefault(require("../controllers/event_planner/delete"));
const router = express_1.default.Router();
// GET a single planner
router.get("/:id", getOne_1.default);
// GET all planners
router.get("/", getAll_1.default);
// CREATE a new planner
router.post("/", create_1.default);
// UPDATE an planner
router.patch("/:id", update_1.default);
// DELETE an planner
router.delete("/:id", delete_1.default);
exports.default = router;
