import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";
// import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="faded" sticky="top" expand="md" light>
          <div className="container-fluid">
            <NavbarBrand href="/" className="mr-auto navlogotext">
              The B-Word
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="mr-2" />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink href="/">Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">FAQs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Blog</NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text">
                <Button
                  outline
                  className="homeLoginButton"
                  onClick={this.toggleModal}
                >
                  Login
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal} className="text-center">Welcome Back!</ModalHeader>
          <ModalBody>Let's keep making progress!</ModalBody>
          <ModalFooter>
            <Button>Submit</Button> <Button>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
