import { getAll } from "../../lib/helper"
import { Artiste } from "../../models/Artiste"

const getAllArtistes = getAll(Artiste)

export default getAllArtistes;