"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAll_1 = __importDefault(require("../controllers/consumer/getAll"));
const getOne_1 = __importDefault(require("../controllers/consumer/getOne"));
const create_1 = __importDefault(require("../controllers/consumer/create"));
const update_1 = __importDefault(require("../controllers/consumer/update"));
const delete_1 = __importDefault(require("../controllers/consumer/delete"));
const followArtiste_1 = __importDefault(require("../controllers/consumer/followArtiste"));
const router = express_1.default.Router();
// GET a single consumer
router.get("/:id", getOne_1.default);
// GET all consumers
router.get("/", getAll_1.default);
// CREATE a new consumer
router.post("/", create_1.default);
// UPDATE an consumer
router.patch("/:id", update_1.default);
// FOLLOW an artiste
router.patch("/follow/:id", followArtiste_1.default);
// DELETE an consumer
router.delete("/:id", delete_1.default);
exports.default = router;
