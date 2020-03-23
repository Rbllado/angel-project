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
              <Card.Img variant="top" src="/images/descriptionProject.jpg" />
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
              <svg class="bi bi-chevron-bar-contract" margin-top="30px" width="250px" height="100px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.646 14.854a.5.5 0 00.708 0L8 11.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708zm0-13.708a.5.5 0 01.708 0L8 4.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708zM1 8a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 8z" clip-rule="evenodd" />
              </svg>
              <Card.Body>
                <Card.Title>Incident</Card.Title>
                <Card.Text>
                  Incidents: {this.state.incidents}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              {/* <Card.Img height="200px"> */}
              <br></br>
              <svg class="bi bi-calendar" margin-top="30px" width="250px" height="100px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
              <Card.Body>
                <Card.Title>electricista</Card.Title>
                <Card.Text>
                  Number of Electrician: {this.state.electricista}.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" height="200px" src="/images/clock.png" />
              <img src="/assets/img/bootstrap.svg" alt="" width="32" height="32" title="Bootstrap"></img>
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
              <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" />
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
              <svg class="bi bi-building" margin-top="30px" width="250px" height="100px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M15.285.089A.5.5 0 0115.5.5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5H1a.5.5 0 01-.5-.5v-6a.5.5 0 01.418-.493l5.582-.93V3.5a.5.5 0 01.324-.468l8-3a.5.5 0 01.46.057zM7.5 3.846V8.5a.5.5 0 01-.418.493l-5.582.93V15h8v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.222l-7 2.624z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M6.5 15.5v-7h1v7h-1z" clip-rule="evenodd" />
                <path d="M2.5 11h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm6-10h1v1h-1V3zm2 0h1v1h-1V3zm-4 2h1v1h-1V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm-2 2h1v1h-1V7zm2 0h1v1h-1V7zm-4 0h1v1h-1V7zm0 2h1v1h-1V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z" />
              </svg>
              <Card.Body>
                <Card.Title>Builder</Card.Title>
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
              <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" />
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
              <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" />
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
              <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" />
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
              <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" />
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
