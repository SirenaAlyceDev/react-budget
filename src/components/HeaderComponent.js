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
import { withStyles } from '@material-ui/core/styles';
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [modal, isModalOpen] = useState(false);
  const toggleModal = () => isModalOpen(!modal);

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/gm.test(values.password)) {
      errors.password =
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checked: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const PurpleCheckbox = withStyles({
    root: {
      color: "#787ff6",
      '&$checked': {
        color: "#787ff6",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  

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

      <Modal isOpen={modal} toggle={toggleModal}>
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="errormess">{formik.errors.email}</div>
                ) : null}{" "}
              </Col>
              <Col>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="dense"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="errormess">{formik.errors.password}</div>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col>
                <FormControlLabel
                  control={<PurpleCheckbox name="checked" />}
                  label="Remember Me"
                  onChange={formik.handleChange}
                  checked={formik.values.checked}
                />
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={formik.handleSubmit}
            type="submit"
            value="submit"
            color="primary"
          >
            Login
          </Button>
          <Button onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Header;
