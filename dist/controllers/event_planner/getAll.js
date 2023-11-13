"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const Event_Planner_1 = __importDefault(require("../../models/Event_Planner"));
const getAllPlanners = (0, helper_1.getAll)(Event_Planner_1.default);
exports.default = getAllPlanners;
