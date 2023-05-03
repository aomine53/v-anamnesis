import React from "react";
import { Container } from "@mui/system";
import { Input } from "reactstrap";
import UserService from "./UserService";
import { Typography } from "@mui/material";
import "./Style.css";

const pharmacyDashboard = () => {
  const pharmacyData = JSON.parse(localStorage.getItem("data"));

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     users: [],
  //   };
  // }

  // componentDidMount() {
  //   UserService.getUsers().then((response) => {
  //     this.setState({ users: response.data });
  //   });
  // }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/* <a class="navbar-brand ml-3" href="/">
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

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" className="ml-4">
                <a class="nav-link" href="/Consult">
                  Awaiting Shipment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/DoctorList">
                  Shipped
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/DoctorList">
                  Rejected
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/DoctorList">
                  Quereid
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="jumbotron my-jumbotron1">
        <div className="ml-5">
          <h1 class="display-4">Hello, Pravin Kumar</h1>
          <p class="lead">pravin.kumar@gmail.com</p>
          <p class="lead">Priceline Pharmacy</p>
          <p class="lead">User #745</p>
        </div>
      </div>

      <table
        style={{ padding: "30px" }}
        class="table"
        className="table table-bordered border-danger"
      >
        <thead style={{ backgroundColor: "#67a173" }}>
          <tr>
            <th>Medication</th>
            <th>Time</th>
            <th>Dosage</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(pharmacyData).map((key) => (
            <tr key={key}>
              <td>{pharmacyData[key].medication}</td>
              <td>{pharmacyData[key].time}</td>
              <td>{pharmacyData[key].dosage}</td>
              <td>{pharmacyData[key].instructions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default pharmacyDashboard;
