import React, { useState } from "react";
import {
    Container,
  Jumbotron,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "./HeaderComponent";

const Home = (props) => {
  const [activeTab, setActivetab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActivetab(tab);
  };

  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <Container fluid>
        <Jumbotron fluid>
            <Row>
            <Col>
            <h1>Header</h1>
            <h3>Sub Header</h3>
            <Button color="success" size="lg">
              Test
            </Button>
          </Col>
          <Col>
            <p>image goes here</p>
          </Col>
            </Row>
        </Jumbotron>

        <div className="row">
          <div className="col">
            <h2>Features</h2>
          </div>
        </div>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Tab1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Tab 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                Tab 3
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "4" })}
                onClick={() => {
                  toggle("4");
                }}
              >
                Tab 4
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col>
                  <h4>Tab1 Conent</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
                  <h4>Tab2 Conent</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col>
                  <h4>Tab3 Conent</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col>
                  <h4>Tab4 Conent</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </React.Fragment>
  );
};

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeTab: "1",
//       setActiveTab: "1",
//     };

//     this.tabToggle = this.tabToggle.bind(this);

//   }

//   tabToggle() {
//     this.setState({
//       setActiveTab: !this.state.setActiveTab,
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div>
//           <Header />
//         </div>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col">
//               <p>test</p>
//               <h1>Header</h1>
//               <h3>Sub Header</h3>
//               <Button>Test</Button>
//             </div>
//             <div className="col">
//               <p>test</p>
//             </div>
//           </div>
//           <div className="row">
//             <h2>Features</h2>
//           </div>
//           <div className="row">
//               <Nav tabs>
//                   <NavItem>
//                       <NavLink className={classNames({ active: activeTab === '1'})} onClick={() => {tabToggle('1'); }}>
//                           Feature 1
//                       </NavLink>
//                   </NavItem>
//               </Nav>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

export default Home;
