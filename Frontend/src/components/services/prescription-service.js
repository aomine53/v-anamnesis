import { myAxios } from "./helperPriscription";

export const priscription = (Prescription) => {
  return myAxios
    .post("/api-prescription/addPrescription", Prescription)
    .then((response) => response.prescriptions);
};