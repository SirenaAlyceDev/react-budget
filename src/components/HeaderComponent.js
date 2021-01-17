import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  handleLogin(event) {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked})`
    );
    this.toggleModal();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="faded" sticky="top" expand="md" light>
          <div className="container-fluid">
            <NavbarBrand href="/home" className="mr-auto navlogotext">
              The B-Word
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="mr-2" />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/faqs">
                    FAQs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
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
          <ModalHeader toggle={this.toggleModal} className="text-center">
            Welcome Back, Let's keep making progress!
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember Me
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
            <Button onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
