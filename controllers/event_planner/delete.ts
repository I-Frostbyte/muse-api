import { deleteOne } from "../../lib/helper";
import Planner from "../../models/Event_Planner";

const deletePlanner = deleteOne(Planner)

export default deletePlanner;