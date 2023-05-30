import React from 'react'
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navigation() {
    const navigate = useNavigate();

  return (
<Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        style={{ backgroundColor: "#003640" }}
        variant="light"
      >
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/home");
            }}
          >
            TaskList
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse>
            <Nav className="me-auto"></Nav>

            <Nav>
                <Nav.Link>
                  <Button
                    variant="success"
                    className="signup"
                    onClick={() => {
                      navigate("/createTask");
                    }}
                  >
                    Create
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button
                    variant="success"
                    className="signup"
                    onClick={() => {
                      navigate("/viewtasks");
                    }}
                  >
                    View Tasks
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button
                    variant="success"
                    className="signup"
                    onClick={() => {
                      navigate("/jokesSpot");
                    }}
                  >
                    JokesSpot
                  </Button>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}

export default Navigation