import React from "react";
import UserService from "./UserService";

class Temp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Prescription</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>id</td>
              <td>medication</td>
              <td>time</td>
              <td>dosage</td>
              <td>instruction</td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((Prescription) => (
              <tr key={Prescription.id}>
                <td>{Prescription.medication}</td>
                <td>{Prescription.time}</td>
                <td>{Prescription.dosage}</td>
                <td>{Prescription.instruction ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Temp;
