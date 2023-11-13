"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const Artiste_1 = require("../../models/Artiste");
const createArtiste = (0, helper_1.createOne)(Artiste_1.Artiste, [
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
exports.default = createArtiste;
