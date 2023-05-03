import React, { useState } from "react";
import "./PrescriptionPage.css";
import { priscription } from "../components/services/prescription-service";
import { toast } from "react-toastify";
import axios from "axios";

function PrescriptionPage(props) {
  const [prescriptions, setPrescriptions] = useState({});

  const handleInputChange = (event, id, property) => {
    setPrescriptions({
      ...prescriptions,

      [id]: {
        ...prescriptions[id],

        [property]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
    });
  };

  // const handleInputChange = (event, index, property) => {
  //   const newPrescriptions = [...prescriptions];

  //   newPrescriptions[index][property] =
  //     event.target.type === "checkbox"
  //       ? event.target.checked
  //       : event.target.value;
  //   setPrescriptions(newPrescriptions);
  // };
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleAddRow = () => {
    const newId = Object.keys(prescriptions).length + 1;

    setPrescriptions({
      ...prescriptions,

      [newId]: { medication: "", time: "", dosage: "", instructions: "" },
    });
  };

  // const handleAddRow = () => {
  //   setPrescriptions([
  //     ...prescriptions,
  //     { medication: "", time: "", dosage: "", instructions: "" },
  //   ]);
  // };

  // const handleRemoveRow = (index) => {
  //   const newPrescriptions = [...prescriptions];
  //   newPrescriptions.splice(index, 1);
  //   setPrescriptions([newPrescriptions]);
  // };

  const handleRemoveRow = (id) => {
    const newPrescriptions = { ...prescriptions };

    delete newPrescriptions[id];

    setPrescriptions(newPrescriptions);
  };

  const handleSubmit = async (event) => {
    // event.preventDefault(); // Here you can perform any logic to save the prescription names, such as sending them to an API or storing them in local state.

    // console.log(prescriptions);

    event.preventDefault();

    console.log(prescriptions);

    // Store prescriptions data in local storage
    // localStorage.setItem("data", JSON.stringify(prescriptions));
    localStorage.setItem("data", JSON.stringify(Object.values(prescriptions)));
//console.log(prescriptions);
    // Clear the form after submission
    setPrescriptions({});

    

    //setPrescriptions({});

    // try {
    //   // Send the prescription data to the API using Axios POST request
    //   const response = await axios.post(
    //     "http://localhost:8002/api-prescription/addPrescription",
    //     prescriptions
    //   );
    //   console.log(response); // Log the response data

    //   // Clear the prescriptions state after successful API call
    //   setPrescriptions({});
    //   toast.success("Prescriptions submitted successfully!"); // Show success toast message
    // } catch (error) {
    //   console.error(error); // Log any errors
    //   toast.error("Failed to submit prescriptions. Please try again."); // Show error toast message
    // }
  };



  // //call server api for sending dada
  // priscription([prescriptions])
  //   .then((resp) => {
  //     console.log(resp);
  //     console.log("success log");
  //     toast.success("Your prescription sent successfully");
  //     setPrescriptions({
  //       medication: "",
  //       time: "",
  //       dosage: "",
  //       instructions: "",
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     console.log("Error log");

  //     //handle errors
  //     setError({
  //       errors: error,
  //       isError: true,
  //     });
  //   });

  //setPrescriptions([]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 style={{ textAlign: "center" }}>PRESCRIPTION:</h3>
      <form onSubmit={handleSubmit} className="prescription-form">
        {Object.entries(prescriptions).map(([index, prescription]) => (
          <div key={index} className="prescription-row">
            <label className="prescription-label">
              <span style={{ fontWeight: "bold" }}>
                Medication {index + 1}:
              </span>
              <input
                type="text"
                placeholder="Medication Name"
                value={prescription.medication}
                onChange={(event) =>
                  handleInputChange(event, index, "medication")
                }
                className="prescription-input"
              />
            </label>

            <label className="prescription-label">
              <span style={{ fontWeight: "bold" }}>Time :</span>
              <input
                type="text"
                placeholder="Morning/Afternoon/night"
                value={prescription.time}
                onChange={(event) => handleInputChange(event, index, "time")}
                className="prescription-input"
              />
            </label>

            <label className="prescription-label">
              <span style={{ fontWeight: "bold" }}>Dosage :</span>
              <input
                type="text"
                placeholder="Medicine Dosage"
                value={prescription.dosage}
                onChange={(event) => handleInputChange(event, index, "dosage")}
                className="prescription-input"
              />
            </label>

            <label className="prescription-label">
              <span style={{ fontWeight: "bold" }}>Instructions :</span>
              <input
                type="text"
                placeholder="Before/After Meal"
                value={prescription.instructions}
                onChange={(event) =>
                  handleInputChange(event, index, "instructions")
                }
                className="prescription-input"
              />
            </label>

            <button type="button" onClick={() => handleRemoveRow(index)}>
              Remove Medication
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddRow}>
          Add Prescription
        </button>
        <button type="submit">Submit</button>
      </form>{" "}
    </div>
  );
}

export default PrescriptionPage;
