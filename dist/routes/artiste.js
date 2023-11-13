"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAll_1 = __importDefault(require("../controllers/artiste/getAll"));
const getOne_1 = __importDefault(require("../controllers/artiste/getOne"));
const create_1 = __importDefault(require("../controllers/artiste/create"));
const delete_1 = __importDefault(require("../controllers/artiste/delete"));
const update_1 = __importDefault(require("../controllers/artiste/update"));
const router = express_1.default.Router();
const logResponseStatus = (req, res, next) => {
    res.on("finish", () => {
        console.log(`${req.method} ${req.url} - ${res.statusCode}`);
    });
    next();
};
// GET a single artiste
router.get("/:id", logResponseStatus, getOne_1.default);
// GET all artistes
router.get("/", logResponseStatus, getAll_1.default);
// CREATE a new artiste
router.post("/", logResponseStatus, create_1.default);
// UPDATE an artiste
router.patch("/:id", logResponseStatus, update_1.default);
// DELETE an artiste
router.delete("/:id", logResponseStatus, delete_1.default);
exports.default = router;
