import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [modal, isModalOpen] = useState(false);
  const toggleModal = () => isModalOpen(!modal);

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar expand="md" light>
        <Row className="container-fluid">
          <NavbarBrand href="/home" className="mr-auto navlogotext">
            The B-Word
          </NavbarBrand>
          <NavbarToggler onClick={toggleNav} className="mr-2" />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="ml-auto">
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
              <Button outline className="homeLoginButton" onClick={toggleModal}>
                Login
              </Button>
            </span>
          </Collapse>
        </Row>
      </Navbar>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal} className="text-center">
          Welcome Back, Let's keep making progress!
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  margin="dense"
                />
              </Col>
              <Col>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  margin="dense"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormControlLabel
                  control={<Checkbox name="checkedC" />}
                  label="Remember Me"
                />
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" value="submit" color="primary">
            Login
          </Button>
          <Button onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Header;
