import express from "express"

import getAllEvents from "../controllers/event/getAll"
import getOneEvent from "../controllers/event/getOne"
import createEvent from "../controllers/event/create"
import updateEvent from "../controllers/event/update"
import deleteEvent from "../controllers/event/delete"

const router = express.Router()

// GET a single event
router.get("/:id", getOneEvent)

// GET all events
router.get("/", getAllEvents)

// CREATE a new event
router.post("/", createEvent)

// UPDATE an event
router.patch("/:id", updateEvent)

// DELETE an event
router.delete("/:id", deleteEvent)

export default router;