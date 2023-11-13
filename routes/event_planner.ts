import express from "express"

import getAllPlanners from "../controllers/event_planner/getAll"
import getOnePlanner from "../controllers/event_planner/getOne"
import createPlanner from "../controllers/event_planner/create"
import updatePlanner from "../controllers/event_planner/update"
import deletePlanner from "../controllers/event_planner/delete"

const router = express.Router()

// GET a single planner
router.get("/planners/:id", getOnePlanner)

// GET all planners
router.get("/planners", getAllPlanners)

// CREATE a new planner
router.post("/planners", createPlanner)

// UPDATE an planner
router.patch("/planners/:id", updatePlanner)

// DELETE an planner
router.delete("/planners/:id", deletePlanner)

export default router;