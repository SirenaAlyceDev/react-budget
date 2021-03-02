// import React from 'react';
// import { Row, Col, Button } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const IncomeView = (props) => {
//   return (
//     <>
//       <Row>
//         <Col>
//           <p>income name</p>
//         </Col>
//         <Col>
//           <p>income amount</p>
//         </Col>
//         <Col>
//           <p>action</p>
//         </Col>
//       </Row>
//       {props.income.length > 0 ? (
//         props.income.map((income) => (
//           <Row key={income.id}>
//             <Col>{income.name}</Col>
//             <Col>{income.amount}</Col>
//             <Button
//               onClick={() => {
//                 props.editRow(income);
//               }}
//             >
//               Edit
//             </Button>
//             <Button onClick={() => props.deleteIncome(income.id)}>
//               Delete
//             </Button>
//           </Row>
//         ))
//       ) : (
//         <Row>
//           <Col>No Income Added</Col>
//         </Row>
//       )}
//     </>
//   );
// };

// export default IncomeView;

import React from "react";
import { Table, Button } from "reactstrap";

const IncomeTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Income Name</th>
          <th>Income Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.incomes.length > 0 ? (
          props.incomes.map((income) => (
            <tr key={income.id}>
              <td>{income.name}</td>
              <td>{income.amount}</td>
              <td>
                <Button
                  onClick={() => {
                    props.editRow(income);
                  }}
                >
                  Edit
                </Button>
                <Button onClick={() => props.deleteIncome(income.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Income Added</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default IncomeTable;
