import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import {
  Typography
} from "@mui/material";


const Consult = () => {
  return (
    <div>
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

      <div class="jumbotron">
        <img
          src="/assets/bg.png"
          class="d-block w-100 h-100"
          alt="Background"
          height="600px"
        />
        <figcaption>
          <h1 class="display-4">Avoid travelling!</h1>
          <hr class="my-4 mb-5" />
          <h5 className="mb-5">
            Audio/Video Consultation, Private Consultation from Verified Doctors
          </h5>
          <p class="lead" className="mb-5">
            <a
              class="btn btn-primary btn-lg mt-1 mb-5"
              href="/NewConsultation"
              role="button"
            >
              Book Your Appointment Now
            </a>
          </p>
        </figcaption>
      </div>
    </div>
  );
};

export default Consult;
