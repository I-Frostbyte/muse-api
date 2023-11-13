import { updateOne } from "../../lib/helper";
import Event from "../../models/Event";

const updateEvent = updateOne(Event, [
    'title',
    'venue',
    'date',
    'tickets',
])

export default updateEvent;
