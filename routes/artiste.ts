import express from "express"

import getAllArtistes from "../controllers/artiste/getAll"
import getArtiste from "../controllers/artiste/getOne"
import createArtiste from "../controllers/artiste/create"
import deleteArtiste from "../controllers/artiste/delete"
import updateArtiste from "../controllers/artiste/update"


const router = express.Router()

const logResponseStatus = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.on("finish", () => {
      console.log(`${req.method} ${req.url} - ${res.statusCode}`);
    });
    next();
  };

// GET a single artiste
router.get("/:id", logResponseStatus, getArtiste)

// GET all artistes
router.get("/", logResponseStatus, getAllArtistes)

// CREATE a new artiste
router.post("/", logResponseStatus, createArtiste)

// UPDATE an artiste
router.patch("/:id", logResponseStatus, updateArtiste)

// DELETE an artiste
router.delete("/:id", logResponseStatus, deleteArtiste)

export default router;