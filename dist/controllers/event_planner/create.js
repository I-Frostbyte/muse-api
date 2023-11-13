"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const Event_Planner_1 = __importDefault(require("../../models/Event_Planner"));
const createPlanner = (0, helper_1.createOne)(Event_Planner_1.default, [
    'plannerName',
    'email',
    'password',
    'events'
]);
exports.default = createPlanner;
