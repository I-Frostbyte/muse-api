import { deleteOne } from "../../lib/helper";
import Consumer from "../../models/Consumer";

const deleteConsumer = deleteOne(Consumer)

export default deleteConsumer;