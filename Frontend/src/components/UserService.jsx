import axios from "axios";

const USER_dat = "http://localhost:8002/api-prescription/getAllPrescription";

class UserService {
  getUsers() {
    return axios.get(USER_dat);
  }
}

export default new UserService();
