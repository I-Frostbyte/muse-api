"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Artiste_1 = require("../../models/Artiste");
const helper_1 = require("../../lib/helper");
const updateArtiste = (0, helper_1.updateOne)(Artiste_1.Artiste, [
    'name',
    'phone',
    'genres',
    'location',
    'imageUrl',
    'website',
    'socialMediaLinks',
    'events',
    'availability',
]);
exports.default = updateArtiste;
