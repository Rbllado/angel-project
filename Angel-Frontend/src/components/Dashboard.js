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
                <Card.Title>Project ID</Card.Title>
                <Card.Text>
                  Id: {this.state.idProject}
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
              <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" />
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
          </CardDeck>

        <br></br>


          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Trabajadores</Card.Title>
                <Card.Text>
                  Id: {this.state.idProject}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" height="200px"  src="/images/clock.png" />
              <img src="/assets/img/bootstrap.svg" alt="" width="32" height="32" title="Bootstrap"></img>
              <Card.Body>
                <Card.Title>Created</Card.Title>
                <Card.Text>
                  Fue creado en: {this.state.created_at}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 1 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" height="200px" src="/images/indent-solid.svg" />
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
