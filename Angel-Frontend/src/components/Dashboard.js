import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    state = {
        name: "",
        idProject: 0,
        description: "",
        incidents: 0
      };
    
      getProject = () => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/listproject`,{
            withCredentials: true
          })
          .then(response => {
            //Response for the DB
            console.log("Lo que me devuelve :" + response.data);  
            //JSON.stringify
            
    
            // this.setState({
    
              
            // });
          })
          .catch(err => console.log(err));
      };
    
      componentDidMount() {
        this.getProject();
      }
    
      render() {
        return (
          <div className="coin-container ">
    
    
                <div className="row list-coins">
    
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
    
            <h2>Hi here project</h2>
    
                </div>
    
    
          </div>
        );
      }
}
export default Dashboard;