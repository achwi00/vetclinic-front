import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './views/MainPage'
import Login from './views/Login'
import DashBoardHome from './views/DashBoardHome'
import DashboardNewVisit from "./views/user_dashboard/DashboardNewVisit";
import DashboardMyPets from "./views/user_dashboard/DashboardMyPets";
import DashboardMyPetGroups from "./views/user_dashboard/DashboardMyPetGroups";
import DashboardPet from "./views/user_dashboard/DashboardPet";
import Register from "./views/Register";
import TestView from "./views/TestView";
import {UserProvider} from "./UserContext";
import DashboardNewPet from "./views/user_dashboard/DashboardNewPet";
import DashboardVisits from "./views/user_dashboard/DashboardVisits";
import NewPrescriptionDashboard from "./views/vet_dashboard/NewPrescriptionDashboard";
import DashboardIncomingToday from "./views/vet_dashboard/DashboardIncomingToday";
import DashboardMySchedule from "./views/vet_dashboard/DashboardMySchedule";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/test" element={<TestView/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard/home" element={<DashBoardHome />}/>
          <Route path="/dashboard/new-visit" element={<DashboardNewVisit/>}/>
          <Route path="/dashboard/my-pets" element={<DashboardMyPets/>}/>
          <Route path="/dashboard/my-pet-groups" element={<DashboardMyPetGroups/>}/>
          <Route path="/dashboard/pet/:petName" element={<DashboardPet/>}/>
          <Route path="/dashboard/new-pet" element={<DashboardNewPet/>}/>
          <Route path="/dashboard/visits" element={<DashboardVisits/>}/>
          <Route path="/dashboard/new-prescription" element={<NewPrescriptionDashboard/>}/>
          <Route path="/dashboard/incoming" element={<DashboardIncomingToday/>}/>
          <Route path="/dashboard/my-schedule" element={<DashboardMySchedule/>}/>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
