import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Consult from "./components/Consult";
import NewConsultation from "./components/NewConsultation";
import PatientDashboard from "./components/PatientDashboard";
import DoctorList from "./components/DoctorList";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import DoctorSignUp from "./components/DoctorSignUp";
import PatientSignUp from "./components/PatientSignUp";
import PatientDetails from "./components/PatientDetails";
import PatientList from "./components/PatientList";
import PharmacyDashboard from "./components/PharmacyDashboard";
import PrescriptionPage from "./components/PrescriptionPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/doctor" element={<DoctorSignUp />} />
          <Route path="/signup/patient" element={<PatientSignUp />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/NewConsultation" element={<NewConsultation />} />
          <Route path="/PatientDashboard" element={<PatientDashboard />} />
          <Route path="/DoctorList" element={<DoctorList />} />
          <Route path="/PatientDetails/:id" element={<PatientDetails />} />
          <Route path="/PatientList" element={<PatientList />} />
          <Route path="/PrescriptionPage" element={<PrescriptionPage />} />
          <Route path="/PharmacyDashboard" element={<PharmacyDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

