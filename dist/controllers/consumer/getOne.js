"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const Consumer_1 = __importDefault(require("../../models/Consumer"));
const getOneConsumer = (0, helper_1.getOne)(Consumer_1.default, ['artisteIds'], []);
exports.default = getOneConsumer;
