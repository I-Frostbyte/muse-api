import { getAll } from "../../lib/helper";
import Planner from "../../models/Event_Planner";

const getAllPlanners = getAll(Planner);

export default getAllPlanners;