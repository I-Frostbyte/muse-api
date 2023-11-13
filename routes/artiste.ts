import express from "express"

import getAllArtistes from "../controllers/artiste/getAll"
import getArtiste from "../controllers/artiste/getOne"
import createArtiste from "../controllers/artiste/create"
import deleteArtiste from "../controllers/artiste/delete"
import updateArtiste from "../controllers/artiste/update"

const router = express.Router()

// GET a single artiste
router.get("/artistes/:id", getArtiste)

// GET all artistes
router.get("/artistes", getAllArtistes)

// CREATE a new artiste
router.post("/artistes", createArtiste)

// UPDATE an artiste
router.patch("/artistes/:id", updateArtiste)

// DELETE an artiste
router.delete("/artistes/:id", deleteArtiste)

export default router;