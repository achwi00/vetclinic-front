import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './views/MainPage'
import Login from './views/Login'
import DashBoardHome from './views/DashBoardHome'
import DashboardNewVisit from "./views/DashboardNewVisit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard/home" element={<DashBoardHome/>}/>
          <Route path="/dashboard/new-visit" element={<DashboardNewVisit/>}/>
          {/*<Route path="/dashboard/my-pets" element={<MyPetGroups/>}/>*/}
      </Routes>
    </Router>
  );
}

export default App;
