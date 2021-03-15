import React from "react";
import ReactExport from "react-export-excel";
import { Button } from "reactstrap";


const ExportToExcel = (props) => {
    //   react to excel
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    const ds1 = props.ds1;
    const ds2 = props.ds2;

    return(
        <ExcelFile element={<Button>Download Your Data</Button>} filename="My Budget">
            <ExcelSheet data={ds1} name="Money In">
                <ExcelColumn label="No." value="id"/>
                <ExcelColumn label="Income Name" value="name"/>
                <ExcelColumn label="Income Amount" value="amount"/>
            </ExcelSheet>
            <ExcelSheet data={ds2} name="Money Out">
                <ExcelColumn label="No." value="id"/>
                <ExcelColumn label="Expense Name" value="name"/>
                <ExcelColumn label="Expense Category" value="category"/>
                <ExcelColumn label="Expense Amount" value="amount"/>
            </ExcelSheet>
        </ExcelFile>
    )
};

export default ExportToExcel;
