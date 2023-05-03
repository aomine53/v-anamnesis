import React, { useState } from 'react';
import axios from 'axios';
import "./services/prescription-service"

const RowForm = () => {
  const [rows, setRows] = useState([{ medication: "", time: "", dosage: "", instructions: "" }]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api-prescription/addPrescription', rows)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleRowChange = (event, index) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, {  medication: "", time: "", dosage: "", instructions: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {rows.map((row, index) => (
        <div key={index}>
          <label>
            ID:
            <input type="text" name="medication" value={row.medication} onChange={(event) => handleRowChange(event, index)} />
          </label>
          <label>
            Name:
            <input type="text" name="time" value={row.time} onChange={(event) => handleRowChange(event, index)} />
          </label>
          <label>
            Age:
            <input type="text" name="dosage" value={row.dosage} onChange={(event) => handleRowChange(event, index)} />
          </label>
          <label>
          instructions:
            <input type="text" name="instructions" value={row.instructions} onChange={(event) => handleRowChange(event, index)} />
          </label>
        </div>
        
      ))}
      <button type="button" onClick={handleAddRow}>Add Row</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RowForm;
