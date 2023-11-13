import { Artiste } from "../../models/Artiste";
import { updateOne } from "../../lib/helper";

const updateArtiste = updateOne(Artiste, [
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

export default updateArtiste;