import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './views/MainPage'
import Login from './views/Login'
import DashBoardHome from './views/DashBoardHome'
import DashboardNewVisit from "./views/user_dashboard/DashboardNewVisit";
import DashboardMyPets from "./views/user_dashboard/DashboardMyPets";
import DashboardMyPetGroups from "./views/user_dashboard/DashboardMyPetGroups";
import Register from "./views/Register";
import TestView from "./views/TestView";

function App() {
  return (
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
          {/*<Route path="/dashboard/my-pets" element={<MyPetGroups/>}/>*/}
      </Routes>
    </Router>
  );
}

export default App;
