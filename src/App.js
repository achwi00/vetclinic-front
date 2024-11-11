import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './views/MainPage'
import Login from './views/Login'
import DashBoardHome from './views/DashBoardHome'
import DashboardNewVisit from "./views/DashboardNewVisit";
import DashboardMyPets from "./views/DashboardMyPets";
import DashboardMyPetGroups from "./views/DashboardMyPetGroups";
import Register from "./views/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
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
