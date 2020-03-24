import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'

class Dashboard extends Component {
  state = {
    name: "",
    idProject: 0,
    description: "",
    incidents: 0,
    created_at: "",
    electricista: 0,
    fontanero: 0,
    frigoristas: 0,
    builder: 0,
    nameRecursoPreventivo1: "",
    nameRecursoPreventivo2: "",
    addressHospital: "",
    phoneHospital: 0
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
          created_at: project.created_at.slice(0, 10),
          electricista: project.electricista,
          fontanero: project.fontanero,
          frigoristas: project.frigoristas,
          builder: project.builder,
          nameRecursoPreventivo1: project.nameRecursoPreventivo1,
          nameRecursoPreventivo2: project.nameRecursoPreventivo2,
          addressHospital: project.addressHospital,
          phoneHospital: project.phoneHospital

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

          {/* <div><h2>Name of the project: {this.state.name}</h2></div>
          <div><h2> Id project: {this.state.idProject}</h2></div>
          <div><h3>Description of the project : {this.state.description}</h3></div>
          <div><h2>Incidents: {this.state.incidents}</h2></div>
          <div><h2>Created: {this.state.created_at}</h2></div> */}
          <br></br>


          {/* <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem> */}

          <CardDeck>
            <Card>
              <br></br>
              <svg class="bi bi-info-circle icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd" />
                <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                <circle cx="8" cy="4.5" r="1" />
              </svg>
              <Card.Body>
                <Card.Title>Number of the project</Card.Title>
                <Card.Text>
                  Project Id: {this.state.idProject}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"></small>
              </Card.Footer>
            </Card>
            <Card>
              {/* <Card.Img variant="top" src="/images/descriptionProject.jpg" /> */}
              <br></br>
              <svg class="bi bi-card-heading icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M3 8.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" clip-rule="evenodd" />
                <path d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1z" />
              </svg>
              <Card.Body>
                <Card.Title>Description of the project:</Card.Title>
                <Card.Text>
                  {this.state.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"></small>
              </Card.Footer>
            </Card>
            <Card>
              <br></br>
              {/* <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" /> */}
              <svg class="bi bi-chevron-bar-contract text-danger icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.646 14.854a.5.5 0 00.708 0L8 11.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708zm0-13.708a.5.5 0 01.708 0L8 4.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708zM1 8a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 8z" clip-rule="evenodd" />
              </svg>
              <Card.Body>
                <Card.Title>Incident</Card.Title>
                <Card.Text>
                  Incidents: {this.state.incidents}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"></small>
              </Card.Footer>
            </Card>

            <Card>
              {/* <Card.Img height="200px"> */}
              <br></br>
    
              <svg class="bi bi-calendar bg-white text-dark icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
              {/* </Card.Img> */}
              <Card.Body>
                <Card.Title>Created</Card.Title>
                <Card.Text>
                  Created at: {this.state.created_at}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

          </CardDeck>

          <br></br>


          <CardDeck>
            <Card>
              <br></br>
              <svg class="bi bi-lightning-fill text-warning icons" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z" clip-rule="evenodd" />
              </svg>
              <Card.Body>
                <Card.Title>Electricista</Card.Title>
                <Card.Text>
                  Number of Electrician: {this.state.electricista}.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 1 mins ago</small>
              </Card.Footer>
            </Card>


            <Card>
              {/* <Card.Img variant="top" height="200px" src="/images/clock.png" />
              <img src="/assets/img/bootstrap.svg" alt="" width="32" height="32" title="Bootstrap"></img> */}
              <br></br>
              <svg class="bi bi-hammer icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.812 1.952a.5.5 0 01-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 01-.146.354L3.425 7.853a.5.5 0 01-.708 0L.146 5.274a.5.5 0 010-.706l1.286-1.29a.5.5 0 01.354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 012.077.782l.178.129z" />
                <path fill-rule="evenodd" d="M6.012 3.5a.5.5 0 01.359.165l9.146 8.646A.5.5 0 0115.5 13L14 14.5a.5.5 0 01-.756-.056L4.598 5.297a.5.5 0 01.048-.65l1-1a.5.5 0 01.366-.147z" clip-rule="evenodd" />
              </svg>
              <Card.Body>
                <Card.Title>Fontanero</Card.Title>
                <Card.Text>
                  We have : {this.state.fontanero} working.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 1 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <br></br>
              <svg class="bi bi-tools text-info icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L10.5 9.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L0 1zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 01-3.679 3.674L5.878 12.15a3 3 0 11-2.027-2.027l6.252-6.341A3 3 0 0113.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" clip-rule="evenodd" />
              </svg>
              <Card.Body>
                <Card.Title>Frigoristas</Card.Title>
                <Card.Text>
                  Number of Frigoristas: {this.state.frigoristas}.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <br></br>
              {/* <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" /> */}
              <svg class="bi bi-building text-muted icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M15.285.089A.5.5 0 0115.5.5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5H1a.5.5 0 01-.5-.5v-6a.5.5 0 01.418-.493l5.582-.93V3.5a.5.5 0 01.324-.468l8-3a.5.5 0 01.46.057zM7.5 3.846V8.5a.5.5 0 01-.418.493l-5.582.93V15h8v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.222l-7 2.624z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M6.5 15.5v-7h1v7h-1z" clip-rule="evenodd" />
                <path d="M2.5 11h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm6-10h1v1h-1V3zm2 0h1v1h-1V3zm-4 2h1v1h-1V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm-2 2h1v1h-1V7zm2 0h1v1h-1V7zm-4 0h1v1h-1V7zm0 2h1v1h-1V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z" />
              </svg>
              <Card.Body>
                <Card.Title>Builders</Card.Title>
                <Card.Text>
                  Number of Builders: {this.state.builder}.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

          </CardDeck>


          <br></br>


          <CardDeck>
            <Card>
              {/* <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" /> */}
              <br></br>
              <svg class="bi bi-file-check text-success icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z" />
                <path fill-rule="evenodd" d="M15.854 2.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 4.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd" />
              </svg>
              <Card.Body>
                <Card.Title>Nombre del recurso preventivo 1</Card.Title>
                <Card.Text>
                  Nombre recurso preventivo: {this.state.nameRecursoPreventivo1}.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <br></br>
              <svg class="bi bi-file-check text-success icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z" />
                <path fill-rule="evenodd" d="M15.854 2.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 4.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd" />
              </svg>
              <Card.Body>
                <Card.Title>Nombre del recurso preventivo 2</Card.Title>
                <Card.Text>
                  Nombre del recurso preventivo 2: {this.state.nameRecursoPreventivo2}.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <br></br>
              <svg class="bi bi-geo-alt text-primary icons"  viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>

              <Card.Body>
                <Card.Title>Address of the hospital</Card.Title>
                <Card.Text>
                  Hospital address: {this.state.addressHospital}.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <br></br>
              <svg class="bi bi-phone text-secondary icons" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
              <Card.Body>
                <Card.Title>Phone Hospital</Card.Title>
                <Card.Text>
                  Phone hospital {this.state.phoneHospital}.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>








          {/* <CardColumns>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
      </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.
      </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
        content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.
      </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
        content.{' '}
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img src="holder.js/100px160" />
            </Card>
            <Card className="text-right">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.
      </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
      </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns> */}


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
