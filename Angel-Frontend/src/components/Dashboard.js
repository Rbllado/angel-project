import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    name: "",
    idProject: 0,
    description: "",
    incidents: 0,
    created_at: ""
  };

  getProject = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/listproject`, {
        withCredentials: true
      })
      .then(response => {
        
        //Response for the DB
        let project = response.data
       
        this.setState({

          name: project.name,
          idProject: project.idProject,
          description: project.description,
          incidents: project.incidents,
          created_at: project.created_at.slice(0, 10)

        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getProject();
  }

  render() {
    return (
      <div className="container">


        <div className="">

          <div><h2>Name of the project: {this.state.name}</h2></div>
          <div><h2> Id project: {this.state.idProject}</h2></div>
          <div><h3>Description of the project : {this.state.description}</h3></div>
          <div><h2>Incidents: {this.state.incidents}</h2></div>
          <div><h2>Created: {this.state.created_at}</h2></div>

        </div>


      </div>
    );
  }
}
export default Dashboard;




{/* {this.state.copyListOfCoins.map((project, key) => {
              return (
                //We take the key from database that is unique..
                  <div key={key} className="col-lg-3 col-md-6 col-sm 12">
                    <div
                      className="card coins"
                      key={coin._id}
                    >
                      <img className="card-img-top coinlist-logo" src={coin.img} alt="Card" />
                      <div className="card-body">
                        <h5 className="card-title">{coin.name}</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">${coin.price}</li>
                        <li className="list-group-item">Tag: {coin.tags}</li>
                        <li className="list-group-item">{coin.symbol}</li>
                      </ul>
                      <div className="card-body">
                        <Link
                          to={`/coins/detail/${coin._id}`}
                          key={coin._id}
                          className="card-link"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
              );
            })} */}
