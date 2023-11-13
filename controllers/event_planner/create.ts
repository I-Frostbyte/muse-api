import { createOne } from "../../lib/helper";
import Planner from "../../models/Event_Planner";

const createPlanner = createOne(Planner, [
    'plannerName',
    'email',
    'password',
    'events'
])

export default createPlanner;