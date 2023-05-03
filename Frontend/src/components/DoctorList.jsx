import React, { useState } from "react";
import DoctorsData from "./DoctorsData";
import "./Style.css";
import {
  Typography
} from "@mui/material";
import Box from "@mui/material/Box";
const DoctorList = () => {
  const [data, setData] = useState(DoctorsData);


  return (
    <>

<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            {/* <a class="navbar-brand ml-3" href="/LandingPage">
              V-anamnesis
            </a> */}
            <Typography variant="h4"  style={{
             color: "#004499",
             fontFamily: "Kaushan Script",
             mt: "3px",
             fontSize: "40px",
          }}>
            V
          </Typography>
          <Typography variant="h4" style={{
             color: "#004499",
             fontFamily: "Kaushan Script",
             mt: "3px",
             fontSize: "40px",
          }}>
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
                    Video Consult
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/PatientDashboard">
                    Medicine History
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    <div className="row d-flex justify-content-center align-items-center">
      {data.map((ele, id) => {
        return (
          <>
            <div
              class="card"
              style={{ width: "25rem", border: "1px solid black" }}
              className=" mt-5 ml-5 card_style "
            >
              <div class="card-body">
                <h4 class="card-title" className="mt-2">
                  {ele.dname}
                </h4>
                <p class="card-text">Specialization: {ele.specialization}</p>
                <p class="card-text">Experience: {ele.experience}</p>
                <p class="card-text">Rating: {ele.rating}</p>

                <a class="btn btn-primary mb-3" href="/" role="button">Book your slot</a>

              </div>
            </div>
            
          </>
        );
        
      })}
      </div>
    </>
  );
};

export default DoctorList;
