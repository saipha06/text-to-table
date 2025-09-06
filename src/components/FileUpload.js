import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";

const FileUpload = () => {
  const [tableData, setTableData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const lines = event.target.result.split("\n").filter(Boolean);
      const parsedData = lines.map((line) => line.split(/\s+|,/));
      setTableData(parsedData);
    };
    reader.readAsText(file);
  };

  return (
    <>
      <Form.Group controlId="fileUpload" className="mb-4">
        <Form.Control
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          className="bg-secondary text-light border-secondary"
        />
      </Form.Group>

      {tableData.length > 0 && (
        <div style={{ overflowX: "auto" }}>
          <Table
            striped
            bordered
            hover
            size="sm"
            responsive
            variant="dark"
            className="text-light"
          >
            <thead>
              <tr>
                {tableData[0].map((_, idx) => (
                  <th key={idx}>Column {idx + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default FileUpload;
