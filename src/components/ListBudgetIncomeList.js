import React from "react";
import { ListGroup, ListGroupItem, Button,  } from "reactstrap";

const incomeList = ({ income }) => (
    <React.Fragment>
  <div>
    <ListGroup>
      {income.map((item) => (
          <>
        <ListGroupItem className="incomeListItems" key={item.id}>
          {item.name} - $ {item.amount} {" "}
          <Button className="btn ml-5" outline>
        {" "}
        -{" "}
      </Button>
        </ListGroupItem>
      </>
      ))}
    </ListGroup>
    
  </div>

    </React.Fragment>

);

export default incomeList;
