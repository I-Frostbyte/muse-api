import { createOne } from "../../lib/helper";
import { Artiste } from "../../models/Artiste";

const createArtiste = createOne(Artiste, [
    'name',
    'phone',
    'genres',
    'location',
    'imageUrl',
    'website',
    'socialMediaLinks',
    'events',
    'availability',
])

export default createArtiste;