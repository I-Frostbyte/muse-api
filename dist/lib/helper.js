"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getOne = exports.createOne = exports.updateOne = exports.deleteOne = void 0;
const catchAsync_1 = __importDefault(require("./catchAsync"));
const deleteOne = (Model) => (0, catchAsync_1.default)(async (req, res) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
        return res.status(404).json({
            status: "Not found",
            message: `Document with id ${req.params.id} not found`,
        });
    }
    await Model.findByIdAndDelete(req.params.id);
    return res.status(204).json({
        status: "OK",
        message: "Document deleted successfully",
    });
});
exports.deleteOne = deleteOne;
const updateOne = (Model, params) => (0, catchAsync_1.default)(async (req, res) => {
    const id = res?.query?.id;
    let body = {};
    params.forEach((param) => (body[param] = req.body[param] || null));
    const updatedDoc = await Model.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: "OK",
        data: updatedDoc,
    });
});
exports.updateOne = updateOne;
const createOne = (Model, params) => (0, catchAsync_1.default)(async (req, res) => {
    const body = {};
    params.forEach((param) => (body[param] = req.body[param]));
    const newDoc = await Model.create(req.body);
    return res.status(201).json({
        status: "OK",
        data: newDoc,
    });
});
exports.createOne = createOne;
const getOne = (Model, populateOptions, selectOptions) => (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    let query = Model.findById(id);
    if (populateOptions) {
        populateOptions.forEach((populateOption) => (query = query.populate(populateOption)));
    }
    if (selectOptions)
        query = query.select(selectOptions);
    const doc = await query;
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
});
exports.getOne = getOne;
const getAll = (Model) => (0, catchAsync_1.default)(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const query = Model.find()
        .limit(Number(limit) * 1)
        .skip((Number(page) - 1) * Number(limit))
        .exec();
    const count = await Model.countDocuments();
    const docs = await query;
    return res.status(200).json({
        status: "OK",
        data: docs,
        totalPages: Math.ceil(count / Number(limit)),
        currentPage: page,
    });
});
exports.getAll = getAll;
