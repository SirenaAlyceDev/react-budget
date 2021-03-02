// import React, { useState } from "react";
// import { Button, Form, Input } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AddIncomeForm = (props) => {
//     const initialFormState = { id: null, name: '', amount: '' }
//     const [income, setIncome] = useState(initialFormState)

//     const handleInputChange = (event) => {
//         const { name, value } = event.target
//         setIncome({ ...income, [name]: value })
//         console.log(event)
//       }

//   return (
//     <Form onSubmit={event => {
//         event.preventDefault()
//         if(!income.name || !income.amount) return
//         props.addIncome(income)
//         setIncome(initialFormState)
//     }}>
//       <Input type="type" name="name" value={income.name} placeholder="income name" onChange={handleInputChange} />
//       <Input type="type" name="amount" value={income.amount} placeholder="income amount" onChange={handleInputChange} />
//       <Button>Add New Income</Button>
//     </Form>
//   );
// };

// export default AddIncomeForm;

import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";

const AddIncomeForm = (props) => {
  const initialFormState = { id: null, name: "", amount: "" };
  const [income, setIncome] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target
  
    setIncome({ ...income, [name]: value })
  }

  return (
    <Form onSubmit={event => {
      event.preventDefault()
      if (!income.name || !income.amount) return
  
      props.addIncome(income)
      setIncome(initialFormState)
    }}>
      <Input type="text" name="name" placeholder="income name" value={income.name} onChange={handleInputChange} />
      <Input type="text" name="amount" placeholder="income amount" value={income.amount} onChange={handleInputChange} />
      <Button>Add New Income</Button>
    </Form>
  );
};

export default AddIncomeForm;
