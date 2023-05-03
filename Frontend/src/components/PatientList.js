import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import DoctorAppBar from "./DoctorAppBar";
import "./PatientList.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "./Style.css"
// import PatientDetails from "./PatientDetails.js";

function PatientList() {
  const [names, setNames] = useState([
    {
      id: uuidv4(),
      first_name: "Aryan",
      last_name: "Singh",
      age: 26,
      gender: "Male",
      contact: 9647789876,
    },
    {
      id: uuidv4(),
      first_name: "Diya",
      last_name: "Sharma",
      age: 23,
      gender: "Female",
      contact: 9842342342,
    },
    {
      id: uuidv4(),
      first_name: "Rahul",
      last_name: "Kumar",
      age: 40,
      gender: "Male",
      contact: 9845454545,
    },
    {
      id: uuidv4(),
      first_name: "Priya",
      last_name: "Sane",
      age: 34,
      gender: "Female",
      contact: 9845455645,
    },
    {
      id: uuidv4(),
      first_name: "Dev",
      last_name: "Rajput",
      age: 55,
      gender: "Male",
      contact: 9876455645,
    },
    {
      id: uuidv4(),
      first_name: "Jay",
      last_name: "Shah",
      age: 35,
      gender: "Male",
      contact: 9876455645,
    },
  ]);

  const navigate = useNavigate();

  function handleButtonClick(id) {
    const selectedPatient = names.find((name) => name.id === id);
    navigate(`/PatientDetails/${id}`, { state: { patient: selectedPatient } });
  }

  return (
    <div>
      
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            {/* <a class="navbar-brand ml-3" href="/LandingPage">
              V-anamnesis
            </a> */}
            <Typography
              variant="h4"
              style={{
                color: "#004499",
                fontFamily: "Kaushan Script",
                mt: "3px",
                fontSize: "40px",
              }}
            >
              V
            </Typography>
            <Typography
              variant="h4"
              style={{
                color: "#004499",
                fontFamily: "Kaushan Script",
                mt: "3px",
                fontSize: "40px",
              }}
            >
              -anamnesis
            </Typography>
            <Box
              sx={{
                // display: { xs: "none", sm: "block" },
                position: "absolute",
                top: 0,
                right: 0,
                mt: "18px",
                mr: "10px",
              }}
            ></Box>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" className="ml-4">
                  <a class="nav-link" href="/NewConsultation">
                    Pending Appointments
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/PatientDashboard">
                    Patient History
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <h3 class="my-header mt-3 ml-4" >Patient's Appointments</h3>
      <div style={{ marginTop: "30px", padding: "20px", marginRight: "15px" }}>
        <ul>
          {names.map((name, index) => (
            <li className="pListItem" key={name.id}>
              <span id="serial">ID : {index + 1}. </span>
              <span id="first_name">Name : {name.first_name}</span>
              <span id="last_name">{name.last_name}</span>
              <span id="age">Age :{name.age}</span>
              <span id="contact">Comtact : {name.contact}</span>
              <button onClick={() => handleButtonClick(name.id)} >Show</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PatientList;
