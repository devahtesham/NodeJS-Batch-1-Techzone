const express = require("express"); 
const controllers = require("../controllers/Controllers");
const router = express.Router()

// testing
router.get("/sample",controllers.sample)