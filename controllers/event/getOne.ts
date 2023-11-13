import { getOne } from "../../lib/helper";
import Event from "../../models/Event";

const getOneEvent = getOne(Event, [], [])

export default getOneEvent;