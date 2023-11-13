"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const Artiste_1 = require("../../models/Artiste");
const getArtiste = (0, helper_1.getOne)(Artiste_1.Artiste, ['events'], []);
exports.default = getArtiste;
