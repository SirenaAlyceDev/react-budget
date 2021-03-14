import React, { useState } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
} from "reactstrap";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [activeTab, setActivetab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActivetab(tab);
  };

  const [modal, isModalOpen] = useState(false);
  const toggleModal = () => isModalOpen(!modal);

  const history = useHistory();

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Uh oh! Please enter your first name";
    } else if (values.firstName.length < 2) {
      errors.firstName = "Unfortunately, your name is too short";
    }
    if (!values.lastName) {
      errors.lastName = "Uh oh! Please enter your first name";
    } else if (values.lastName.length < 2) {
      errors.lastName = "Must be 20 characters or less";
    }
    if (!values.email) {
      errors.email = "Uh oh! Please enter your email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      history.push("/budgetstyle");
    },
  });

  return (
    <React.Fragment>
      <Container fluid className=" mainContainer">
        <Row className="row w-100 align-items-center">
          <Col className="col text-right headerDiv">
            <p className="pre-header">MANAGING YOUR MONEY YOUR WAY</p>
            <h1 className="heading">
              BUDGETING YOUR WAY
              <br /> TO FINANICAL <br /> PEACE
            </h1>
            <h3 className="subheading">
              KEEP YOUR EYES ON THE PRIZE AND CREATE A BUDGET PLAN <br /> TO
              CHANGE YOUR FUTURE
            </h3>
            <Button size="sm" className="ctahome" onClick={toggleModal}>
              Start Budgeting
            </Button>
          </Col>
          <Col className="col text-center homeImageDiv">
            <img
              className="home-image"
              src="/assets/images/pexels-ketut-subiyanto-4350108.jpg"
              height="400"
              width="300"
              alt="home-img"
            />
          </Col>
        </Row>
        <Row className="row w-100">
          <Col className="col">
            <h2 className="featuresheader">FEATURES</h2>
          </Col>
        </Row>
        <Row className="row w-100">
          <Col>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Eyes on the Prize
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Reduce Debt
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Organize Spending & Savings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  Kill Bad Habits & Make Better Choices
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col>
                    <p>
                      Donut jelly-o pastry toffee. Chocolate cake pudding
                      jelly-o. Cheesecake halvah soufflé bonbon. Cupcake dessert
                      pastry pastry lemon drops dessert apple pie pie.
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col>
                    <p>
                      Jelly-o danish gummies brownie cake sugar plum bonbon bear
                      claw. Apple pie candy canes chupa chups ice cream pie
                      chocolate cake. Lemon drops apple pie macaroon powder.
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col>
                    <p>
                      Cake topping biscuit. Cupcake toffee cheesecake danish
                      biscuit gummi bears croissant tiramisu. Candy canes
                      chocolate cake candy canes.
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col>
                    <p>
                      Macaroon sweet biscuit lollipop pie jujubes tart.
                      Chocolate chocolate cake cotton candy. Tiramisu cotton
                      candy soufflé.
                    </p>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>

        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal} className="text-center">
            Let's get started!
          </ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                <Col>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    margin="dense"
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="errormess">{formik.errors.firstName}</div>
                  ) : null}
                </Col>
                <Col>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    margin="dense"
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="errormess">{formik.errors.lastName}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    margin="dense"

                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="errormess">{formik.errors.email}</div>
                  ) : null}
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={formik.handleSubmit} type="submit">
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default Home;
