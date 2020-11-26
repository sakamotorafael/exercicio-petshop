const express = require("express")
const router = express.Router()
const petsController = require("../controller/petsController")

router.get("/", petsController.home)
router.get("/pets/all", petsController.listar)
router.get("/pets/:id", petsController.petID)
router.get("/pets", petsController.petNome)

module.exports = router