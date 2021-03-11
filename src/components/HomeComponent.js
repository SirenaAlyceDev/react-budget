import React, { useState } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
import classnames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const [activeTab, setActivetab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActivetab(tab);
  };

  const [modal, isModalOpen] = useState(false);
  const toggleModal = () => isModalOpen(!modal);

  const initialFormState = { firstname: "", lastname: "", email: "" };
  const [registration, setRegistration] = useState(initialFormState);

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistration({ ...registration, [name]: value });
  };

  const handleRedirect = (event) => {
    let firstname = registration.firstname;
    if (firstname !=='') {
      event.preventDefault();
      history.push("/budgetstyle");
    } else alert('nope');
  };

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
            <Form onSubmit={handleRedirect}>
              <Row form>
                <Col>
                  <FormGroup>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                      type="text"
                      id="firstname"
                      name="firstname"
                      onChange={handleInputChange}
                      invalid={registration.firstname === ""}
                      valid={registration.firstname !== ""}
                      required
                    />
                    <FormFeedback valid />
                    <FormFeedback invalid>
                      Uh oh! Looks like you didn't enter your first name. Please input
                      your first name.
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input
                      type="text"
                      id="lastname"
                      name="lastname"
                      onChange={handleInputChange}
                      required
                      invalid={registration.lastname === "" || registration.lastname.length < 2}
                      valid={registration.lastname !== ""}
                    />
                    <FormFeedback valid />
                    <FormFeedback invalid>
                      Uh oh! Looks like you didn't enter your last name. Please input
                      your last name.
                    </FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col>
                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleInputChange}
                      required
                      invalid={registration.email ===''}
                      valid={registration.email !==''}
                    />
                    <FormFeedback valid />
                    <FormFeedback invalid>
                      Uh oh! Looks like you didn't enter your email.
                      Please input your email.
                    </FormFeedback>
                    </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Input type="submit" onClick={handleRedirect}>Submit</Input>
          </ModalFooter>
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default Home;
