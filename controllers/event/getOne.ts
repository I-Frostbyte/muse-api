import { getOne } from "../../lib/helper";
import Event from "../../models/Event";

const getOneEvent = getOne(Event, ['artistes', 'planners'], [])

export default getOneEvent;