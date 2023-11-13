import { updateOne } from "../../lib/helper";
import Consumer from "../../models/Consumer";

const followArtiste = updateOne(Consumer, [
    'artisteIds'
])

export default followArtiste;