import { createOne } from "../../lib/helper";
import Event from "../../models/Event";

const createEvent = createOne(Event, [
    'title',
    'venue',
    'date',
    'tickets',
])

export default createEvent;