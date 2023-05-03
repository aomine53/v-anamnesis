import { myAxios } from "./helperDoctor";

export const DSignUp = (Doctor) => {
    return myAxios
      .post("/api-doctor/doctorSignUp", Doctor)
      .then((response) => response.info);
  };
  
  export const loginUser = (loginDetail) => {
    return myAxios
      .post("/api-doctor/doctorLogin", loginDetail)
      .then((response) => response.info);
  };