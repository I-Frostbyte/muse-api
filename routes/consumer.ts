import express from "express"

import getAllConsumers from "../controllers/consumer/getAll"
import getOneConsumer from "../controllers/consumer/getOne"
import createConsumer from "../controllers/consumer/create"
import updateConsumer from "../controllers/consumer/update"
import deleteConsumer from "../controllers/consumer/delete"
import followArtiste from "../controllers/consumer/followArtiste"

const router = express.Router()

// GET a single consumer
router.get("/:id", getOneConsumer)

// GET all consumers
router.get("/", getAllConsumers)

// CREATE a new consumer
router.post("/", createConsumer)

// UPDATE an consumer
router.patch("/:id", updateConsumer)

// FOLLOW an artiste
router.patch("/follow/:id", followArtiste)

// DELETE an consumer
router.delete("/:id", deleteConsumer)

export default router;