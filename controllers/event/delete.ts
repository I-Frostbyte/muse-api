import { deleteOne } from "../../lib/helper";
import Event from "../../models/Event";

const deleteEvent = deleteOne(Event)

export default deleteEvent;