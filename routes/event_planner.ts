import express from "express"

import getAllPlanners from "../controllers/event_planner/getAll"
import getOnePlanner from "../controllers/event_planner/getOne"
import createPlanner from "../controllers/event_planner/create"
import updatePlanner from "../controllers/event_planner/update"
import deletePlanner from "../controllers/event_planner/delete"

const router = express.Router()

// GET a single planner
router.get("/:id", getOnePlanner)

// GET all planners
router.get("/", getAllPlanners)

// CREATE a new planner
router.post("/", createPlanner)

// UPDATE an planner
router.patch("/:id", updatePlanner)

// DELETE an planner
router.delete("/:id", deletePlanner)

export default router;