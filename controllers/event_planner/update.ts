import { updateOne } from "../../lib/helper";
import Planner from "../../models/Event_Planner";

const updatePlanner = updateOne(Planner, [
    'plannerName',
    'email',
    'password',
    'events'
])

export default updatePlanner;