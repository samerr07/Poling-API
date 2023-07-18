const optionController = require("../controller/option")
const express = require("express");
const router = express.Router(); 

router.post("/:id/create",optionController.createOption)
.post("/:id/add_Vote",optionController.addVote)
.delete("/:id/delete",optionController.deleteOption)

exports.router = router;