import express from "express"

import getAllConsumers from "../controllers/consumer/getAll"
import getOneConsumer from "../controllers/consumer/getOne"
import createConsumer from "../controllers/consumer/create"
import updateConsumer from "../controllers/consumer/update"
import deleteConsumer from "../controllers/consumer/delete"

const router = express.Router()

// GET a single consumer
router.get("/consumers/:id", getOneConsumer)

// GET all consumers
router.get("/consumers", getAllConsumers)

// CREATE a new consumer
router.post("/consumers", createConsumer)

// UPDATE an consumer
router.patch("/consumers/:id", updateConsumer)

// DELETE an consumer
router.delete("/consumers/:id", deleteConsumer)

export default router;