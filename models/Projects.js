const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    idProject: { type: Number, required: true },
    // logoCliente: { type: String },
    description: { type: String, required: true },
    incidents: { type: Number, required: true },
    // web: { type: String }
    //   history: [{type: Schema.Types.ObjectId , ref: "History"}],
    //   ownCoins: [{type: Schema.Types.ObjectId , ref: "OwnCoins"}]
    electricista: { type: Number },
    fontanero: { type: Number },
    frigoristas: { type: Number },
    builder: { type: Number },
    nameRecursoPreventivo1: { type: String },
    nameRecursoPreventivo2: { type: String },
    addressHospital: { type: String },
    phoneHospital: { type: Number }
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
