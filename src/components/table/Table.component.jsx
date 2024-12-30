import React from "react";
import { companyData, w3data } from "../../data/table.data";

const DynamicTable = ({ props }) => {
  function getTableHeaders() {
    return props.data[0];
  }

  function getTableData() {
    return props.data.slice(1, Infinity);
  }

  function TableHeader() {
    return getTableHeaders().map((v) => <th>{v}</th>);
  }

  function TableData() {
    let tableData = getTableData();
    let elements = [];

    for (let i = 0; i < tableData.length; i++) {
      let buff = [];
      for (let j = 0; j < tableData[i].length; j++) {
        buff.push(<td>{tableData[i][j]}</td>);
      }
      elements.push(<tr>{buff}</tr>);
    }

    return <>{elements}</>;
  }
  return (
    <div>
      <h3>DynamicTable</h3>
      {/* {props.data.slice(1, Infinity)} */}
      <table>
        <tr>{TableHeader()}</tr>

        {TableData()}
      </table>
    </div>
  );
};

const StaticTable = () => {
  function getTableData(tableData) {
    return companyData.slice(1, Infinity).map((v) => <td>{v}</td>);
  }

  return (
    <div>
      <h3>StaticTable</h3>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
};

export { StaticTable, DynamicTable };
