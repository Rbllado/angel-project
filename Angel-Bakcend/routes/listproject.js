var express = require("express");
var router = express.Router();
var axios = require("axios");


//const Project = require("./../models/Projects");
const User = require("../models/User");
const Projects = require("../models/Projects");

// when arrives here localhost:5000/listproject
router.get("/", async (req, res, next) => {

  const userId = req.session.currentUser._id;

  await User.findById(userId)

    .populate("projects")
    .then(project => {
      //only the first project

      let projectId = project.project[0];

      //returning the value of project
      Projects.findById(projectId)
        .then(detailProject => {
          console.log((detailProject));
          res.json(detailProject);
        })
        .catch(err => console.log(err))
      //res.json(project);
    })
    .catch(err => console.log(err));
});

module.exports = router;
