var express = require("express");
var router = express.Router();
var axios = require("axios");


//const Project = require("./../models/Projects");
const User = require("../models/User");
const Projects = require("../models/Projects");

// when arrives here localhost:5000/listproject
router.get("/", (req, res, next) => {

  const userId = req.session.currentUser._id;

  //project that the user have.
  User.findById(userId)
    .then(project => {
      //in that case it is only the first one
      let projectId = project.project[0];

      //returning the description of project
      Projects.findById(projectId)
        .then(detailProject => {
          res.status(200).json((detailProject));
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

});

module.exports = router;



