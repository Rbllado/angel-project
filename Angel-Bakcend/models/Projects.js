const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    idProject: { type: Number, required: true },
    // img: { type: String },
    description: { type: String, required: true },
    incidents: { type: Number, required: true },
    // web: { type: String }
    //   history: [{type: Schema.Types.ObjectId , ref: "History"}],
    //   ownCoins: [{type: Schema.Types.ObjectId , ref: "OwnCoins"}]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
