import React from "react";

function TableBuilder() {}

const Table = () => {
  const data = [
    ["name", "age", "location"],
    ["John Doe", "30", "New York, NY"],
    ["Jane Smith", "25", "Los Angeles, CA"],
    ['Bob"Bobson"', "40", "San Francisco"],
    ["Address", "City", "State"],
    ["123 Some St,\nSome City", "NY", "10001"],
  ];

  const w3data = [
    ["Company", "Contact", "Country"],
    ["John Doe", "30", "New York, NY"],
    ["Jane Smith", "25", "Los Angeles, CA"],
    ['Bob"Bobson"', "40", "San Francisco"],
    ["Address", "City", "State"],
    ["123 Some St,\nSome City", "NY", "10001"],
  ];

  const headers = data[0];
  const tableHeaders = headers.map((v) => <th>{v}</th>);
  const tableData = data.slice(1, Infinity).map((v) => <td>{v}</td>);

  return (
    <table>
      <tr>
        {/* <th>Company</th>
        <th>Contact</th>
        <th>Country</th> */}
        {tableHeaders}
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
  );
};

export { Table };
