var express = require("express");
var router = express.Router();
var axios = require("axios");

const Project = require("./../models/Projects");
const User = require("../models/User");

// when arrives here localhost:5000/addproject
router.post("/", async (req, res, next) => {

  // params to create a project
   const { name, idProject, description, incidents} = req.body;

  //  userID from the current user
   const userId = req.session.currentUser._id;

  await User.findById(userId)
    .then(() => {
      Project.create({ name, idProject, description, incidents })
        .then(project => {

          _id = project._id;

          // And add into the array of projects of the user
          User.findByIdAndUpdate(
            userId,
            { $push: { project: _id } },
            { new: true }
          )
            .then(result => {
              res.json(result);
            })
            .catch(err => console.log(err));

        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
    
  
  });

module.exports = router;
