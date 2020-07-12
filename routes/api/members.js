const express = require("express");
const router = express.Router();
const members = require("../../Members");
const e = require("express");
//Get all members
router.get("/", (req, res) => {
  res.json(members);
});

//Get one member
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  var member = members.find((member) => {
    return member.id === id;
  });
  if (member) {
    res.json(member);
  } else {
    res.status(400).json("No member found");
  }
});

//Create memeber
router.post('/',(req,res)=>{
    res.send(req.body);
})

module.exports = router;