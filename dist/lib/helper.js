"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getOne = exports.createOne = exports.updateOne = exports.deleteOne = void 0;
const catchAsync_1 = __importDefault(require("./catchAsync"));
const deleteOne = (Model) => (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const doc = yield Model.findById(req.params.id);
    if (!doc) {
        return res.status(404).json({
            status: "Not found",
            message: `Document with id ${req.params.id} not found`,
        });
    }
    yield Model.findByIdAndDelete(req.params.id);
    return res.status(204).json({
        status: "OK",
        message: "Document deleted successfully",
    });
}));
exports.deleteOne = deleteOne;
const updateOne = (Model, params) => (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = res === null || res === void 0 ? void 0 : res.query) === null || _a === void 0 ? void 0 : _a.id;
    let body = {};
    params.forEach((param) => (body[param] = req.body[param] || null));
    const updatedDoc = yield Model.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: "OK",
        data: updatedDoc,
    });
}));
exports.updateOne = updateOne;
const createOne = (Model, params) => (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = {};
    params.forEach((param) => (body[param] = req.body[param]));
    const newDoc = yield Model.create(req.body);
    return res.status(201).json({
        status: "OK",
        data: newDoc,
    });
}));
exports.createOne = createOne;
const getOne = (Model, populateOptions, selectOptions) => (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    let query = Model.findById(id);
    if (populateOptions) {
        populateOptions.forEach((populateOption) => (query = query.populate(populateOption)));
    }
    if (selectOptions)
        query = query.select(selectOptions);
    const doc = yield query;
    if (!doc) {
        return res.status(404).json({
            status: "Not found",
            message: "Document not found",
        });
    }
    return res.status(200).json({
        status: "OK",
        data: doc,
    });
}));
exports.getOne = getOne;
const getAll = (Model) => (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10 } = req.query;
    const query = Model.find()
        .limit(Number(limit) * 1)
        .skip((Number(page) - 1) * Number(limit))
        .exec();
    const count = yield Model.countDocuments();
    const docs = yield query;
    return res.status(200).json({
        status: "OK",
        data: docs,
        totalPages: Math.ceil(count / Number(limit)),
        currentPage: page,
    });
}));
exports.getAll = getAll;
