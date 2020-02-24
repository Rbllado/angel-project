import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import {
  Bootstrap,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const a = document.getElementById("navbarNavDropdown");

class Navbar1 extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isLoggedin ? (
              <Nav className="mr-auto">
                {/* <Nav.Link href="#home"> <img src="/images/logo.jpg" className="logo-footer" alt=""/></Nav.Link> */}
                <Nav.Link href="#" className="nav-link">
                <Link to="/" className="nav-link">
                    H0Grup
                  </Link>
                </Nav.Link>

                <Nav.Link href="#home" className="nav-link">
                  <Link to="/" className="nav-link">
                    Welcome : {user.username}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/" className="nav-link" onClick={logout}>
                    Logout
                  </Link>
                </Nav.Link>

                {/* <Nav.Link>
                  <Link className="nav-link" to="/owncoins/add">
                    Add Own Coin
                  </Link>
                </Nav.Link> */}

              </Nav>
            ) : (
              <Nav className="mr-auto">

                <Nav.Link href="#home">
                  {" "}
                  <Link to="/" className="nav-link">
                    H0Group
                  </Link>{" "}
                </Nav.Link>

                {/* <Nav.Link>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </Nav.Link> */}

                
                {/* <Nav.Link>
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                </Nav.Link> */}


                {/* <Nav.Link>
                  <Link to="/coins" className="nav-link">
                    CoinList
                  </Link>
                </Nav.Link> */}

                {/* <Nav.Link>
                  <Link to="/coins/updatehistory" className="nav-link">
                    Update History
                  </Link>
                </Nav.Link> */}

                
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withAuth(Navbar1);
