const questionController = require("../controller/question")
const express = require("express");
const router = express.Router(); 

router.post("/create",questionController.createQuestion)
.get("/:id",questionController.getQuestion)
.delete("/:id/delete",questionController.deleteQuestion)

exports.router = router;