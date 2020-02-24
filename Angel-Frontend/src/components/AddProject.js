import React, { Component } from "react";
import axios from "axios";

class AddProject extends Component {
  state = {
    name: "",
    idProject: 0,
    description: "",
    incidents: 0
  };

  // Keep the information into the state
  handleInput = e => {
    // take the value of every name and put the value of each one.
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("estado :", this.state);

    axios
      .post(`${process.env.REACT_APP_API_URL}/addProject`, this.state, {
        withCredentials: true
      })
      .then(answer => {
        console.log("Respuesta del backend:", answer);
        
      })
      .catch(err => console.log(err));

    this.setState({
      name: "",
      idProject: 0,
      description: "",
      incidents: 0
    });
  };

  render() {
    return (
      <div>
        <div className="container-profile">
          {/* <!-- edit form column --> */}
          <div className="col-lg-12 text-lg-center">
            <h2>Add Project</h2>
            <br />
            <br />
          </div>
          <div className="col-lg-6 push-lg-4 personal-info edit-profile">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Name of the project
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Id of the project
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="number"
                    name="idProject"
                    value={this.state.idProject}
                    onChange={this.handleInput}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Description
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInput}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Incidents
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="number"
                    name="incidents"
                    value={this.state.incidents}
                    onChange={this.handleInput}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label"></label>
                <div className="col-lg-9">
                  <button
                    className="btn btn-primary"
                    value="Save Changes"
                  >
                  Add project</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;
