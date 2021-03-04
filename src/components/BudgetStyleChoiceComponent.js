import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "reactstrap/lib/Container";
import CardDeck from "reactstrap/lib/CardDeck";
import { useHistory } from 'react-router-dom';

const BudgetStyle = (props) => {

  const history = useHistory();
  const handleRedirect = (event) => {
    event.preventDefault();
    history.push("/listbudget");
  }

  const handleFTTRedirect = (event) => {
    event.preventDefault();
    history.push("/fttbudget");
  }

  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="row align-items-center justify-contents-center">
        <Col>
          <CardDeck>
            <Card className="text-center budgetCard">
              <CardImg
                top
                src="/assets/images/coin.svg"
                alt="Card image"
                className="text-center"
              />
              <CardBody>
                <CardTitle>List Budget</CardTitle>
                <CardText>
                  Tootsie roll cupcake croissant oat cake topping ice cream.
                  Pudding topping sesame snaps soufflé. Muffin cheesecake sweet
                  sweet roll. Jelly beans chocolate bar cake gingerbread.
                </CardText>
                <Button className="budgetButton" onClick={handleRedirect}>Select</Button>
              </CardBody>
            </Card>
            <Card className="text-center budgetCard">
              <CardImg
                top
                width="50%"
                src="/assets/images/coin.svg"
                alt="Card image"
              />
              <CardBody>
                <CardTitle>50/30/20 Budget</CardTitle>
                <CardText>
                  Tootsie roll cupcake croissant oat cake topping ice cream.
                  Pudding topping sesame snaps soufflé. Muffin cheesecake sweet
                  sweet roll. Jelly beans chocolate bar cake gingerbread.
                </CardText>
                <Button className="budgetButton" onClick={handleFTTRedirect}>Select</Button>
              </CardBody>
            </Card>
            <Card className="text-center budgetCard">
              <CardImg
                top
                width="100%"
                src="/assets/images/coin.svg"
                alt="Card image"
              />
              <CardBody>
                <CardTitle>Savings Goals Calculator</CardTitle>
                <CardText>
                  Tootsie roll cupcake croissant oat cake topping ice cream.
                  Pudding topping sesame snaps soufflé. Muffin cheesecake sweet
                  sweet roll. Jelly beans chocolate bar cake gingerbread.
                </CardText>
                <Button className="budgetButton">Select</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default BudgetStyle;
