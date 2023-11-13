"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const Artiste_1 = require("../../models/Artiste");
const getAllArtistes = (0, helper_1.getAll)(Artiste_1.Artiste);
exports.default = getAllArtistes;
