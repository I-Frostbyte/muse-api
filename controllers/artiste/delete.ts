import { deleteOne } from "../../lib/helper";
import { Artiste } from "../../models/Artiste";

const deleteArtiste = deleteOne(Artiste)

export default deleteArtiste;