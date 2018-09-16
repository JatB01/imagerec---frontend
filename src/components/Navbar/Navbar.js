import React from "react";
import "./css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="https://jatb01.github.io/Demo-Website/">
            Demo Website
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://jatb01.github.io/Demo-Website/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/JatB01/imagerec-app"
                  target="_blank"
                >
                  GitHub <FontAwesomeIcon icon={faGithub} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
//   <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
//   <div class="container">
/* <a class="navbar-brand" href="https://jatb01.github.io/Demo-Website/">
        Demo Website
      </a>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://jatb01.github.io/Demo-Website/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/JatB01/Shopping-List"
              target="_blank"
            >
              GitHub
              <i class="fab fa-github" />
            </a>
          </li>
        </ul>
      </div> */
//   </div>}
//   {/* </nav> */}
