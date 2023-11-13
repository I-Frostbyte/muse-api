import { getOne } from "../../lib/helper"
import { Artiste } from "../../models/Artiste"

const getArtiste = getOne(Artiste, ['events'], [])

export default getArtiste