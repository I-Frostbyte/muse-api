"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const Artiste_1 = require("../../models/Artiste");
const deleteArtiste = (0, helper_1.deleteOne)(Artiste_1.Artiste);
exports.default = deleteArtiste;
