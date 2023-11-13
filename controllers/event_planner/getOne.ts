import { getOne } from "../../lib/helper";
import Planner from "../../models/Event_Planner";

const getOnePlanner = getOne(Planner, ['events'], [])

export default getOnePlanner;