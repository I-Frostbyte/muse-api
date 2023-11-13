import express from "express"

import getAllEvents from "../controllers/event/getAll"
import getOneEvent from "../controllers/event/getOne"
import createEvent from "../controllers/event/create"
import updateEvent from "../controllers/event/update"
import deleteEvent from "../controllers/event/delete"

const router = express.Router()

// GET a single event
router.get("/events/:id", getOneEvent)

// GET all events
router.get("/events", getAllEvents)

// CREATE a new event
router.post("/events", createEvent)

// UPDATE an event
router.patch("/events/:id", updateEvent)

// DELETE an event
router.delete("/events/:id", deleteEvent)

export default router;