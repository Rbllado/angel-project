var express = require("express");
var router = express.Router();
var axios = require("axios");


//const Project = require("./../models/Projects");
const User = require("../models/User");
const Projects = require("../models/Projects");

// when arrives here localhost:5000/listproject
router.get("/",(req, res, next) => {

  const userId = req.session.currentUser._id;

  User.findById(userId)

    .populate("Project")
    .then(project => {
      console.log(project.project[0]);
      res.json(project.project[0])
      
    })
    .catch(err => console.log(err));
});

module.exports = router;




//only the first project

// let projectId = project.project[0];
      
// //returning the value of project
// Projects.findById(projectId)
//   .then(detailProject => {
//     console.log(detailProject);
//     res.status(200).json((detailProject));
//   })
//   .catch(err => console.log(err))