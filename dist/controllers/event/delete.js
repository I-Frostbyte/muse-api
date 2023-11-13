"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const Event_1 = __importDefault(require("../../models/Event"));
const deleteEvent = (0, helper_1.deleteOne)(Event_1.default);
exports.default = deleteEvent;
